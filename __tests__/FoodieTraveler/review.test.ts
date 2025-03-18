import { NextRequest } from "next/server";
import { POST as createReview, GET as getReviews } from "@/app/api/FoodieTraveler/reviews/route";
import { PUT as updateReview, DELETE as deleteReview } from "@/app/api/FoodieTraveler/reviews/[id]/route";
import { POST as createFood } from "@/app/api/FoodieTraveler/foods/route";
import { POST as createUser } from "@/app/api/FoodieTraveler/users/route"; // ✅ Import User API

describe("Reviews API Tests", () => {
  let testFoodId: string;
  let testReviewId: string;
  let testUserId: string;

  const testEmail = "testreview@example.com";

  // ✅ Create a test user before running the tests
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test Reviewer",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    const user = await res.json();
    testUserId = user.id; // ✅ Store valid user ID
  });

  // ✅ Create a new food item before reviewing
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/FoodieTraveler/foods", {
      method: "POST",
      body: JSON.stringify({
        name: "Burger",
        cuisine: "American",
        origin: "USA",
        description: "Juicy beef burger",
        submittedBy: testUserId, // ✅ Use valid user ID
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createFood(req);
    const food = await res.json();
    testFoodId = food.id;
  });

  // ✅ Submit a review for the food item
  it("should submit a review", async () => {
    const req = new NextRequest("http://localhost:3000/api/FoodieTraveler/reviews", {
      method: "POST",
      body: JSON.stringify({
        foodId: testFoodId,
        userId: testUserId,
        rating: 5,
        comment: "Amazing burger!",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createReview(req);
    expect(res.status).toBe(201);
    const review = await res.json();
    testReviewId = review.id;
    expect(review.rating).toBe(5);
  });

  // ✅ Fetch all reviews for a food item
  it("should fetch all reviews for a food item", async () => {
    const res = await getReviews(new NextRequest(`http://localhost:3000/api/FoodieTraveler/reviews?foodId=${testFoodId}`));
    expect(res.status).toBe(200);
    const reviews = await res.json();
    expect(Array.isArray(reviews)).toBeTruthy();
    expect(reviews.length).toBeGreaterThan(0);
  });

  // ✅ Update the review
  it("should update a review", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/reviews/${testReviewId}`, {
      method: "PUT",
      body: JSON.stringify({ rating: 4, comment: "Good but a little salty." }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateReview(req, { params: { id: testReviewId } });
    expect(res.status).toBe(200);
    const review = await res.json();
    expect(review.rating).toBe(4);
    expect(review.comment).toBe("Good but a little salty.");
  });

  // ✅ Delete the review
  it("should delete a review", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/reviews/${testReviewId}`, {
      method: "DELETE",
    });

    const res = await deleteReview(req, { params: { id: testReviewId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Review deleted successfully");
  });
});
