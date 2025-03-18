import { NextRequest } from "next/server";
import { POST as validateFood } from "@/app/api/FoodieTraveler/admin/foods/[id]/validate/route";
import { POST as validateReview } from "@/app/api/FoodieTraveler/admin/reviews/[id]/validate/route";
import { POST as createFood } from "@/app/api/FoodieTraveler/foods/route";
import { POST as createReview } from "@/app/api/FoodieTraveler/reviews/route";
import { POST as createUser } from "@/app/api/users/route"; // ✅ Import User API

describe("Admin Validation API Tests", () => {
  let testFoodId: string;
  let testReviewId: string;
  let testUserId: string;

  const testEmail = "testadmin@example.com";

  // ✅ Create a test user before running the tests
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Admin User",
        password: "adminpassword",
        group: "admin",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    const user = await res.json();
    testUserId = user.id; // ✅ Store valid admin user ID
  });

  // ✅ Create a new food item before validation
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/FoodieTraveler/foods", {
      method: "POST",
      body: JSON.stringify({
        name: "Sushi",
        cuisine: "Japanese",
        origin: "Japan",
        description: "Fresh sushi rolls",
        submittedBy: testUserId, // ✅ Use valid admin user ID
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createFood(req);
    const food = await res.json();
    testFoodId = food.id;
  });

  // ✅ Create a new review before validation
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/FoodieTraveler/reviews", {
      method: "POST",
      body: JSON.stringify({
        foodId: testFoodId,
        userId: testUserId,
        rating: 5,
        comment: "Delicious and fresh!",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createReview(req);
    const review = await res.json();
    testReviewId = review.id;
  });

  // ✅ Validate food submission (Admin Only)
  it("should validate a food submission", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/admin/foods/${testFoodId}/validate`, {
      method: "POST",
      body: JSON.stringify({ validated: true }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await validateFood(req, { params: { id: testFoodId } });
    console.info("Report created:", res);
    expect(res.status).toBe(200);
    const food = await res.json();
    expect(food.food.validated).toBe(true);
  });

  // ✅ Validate review submission (Admin Only)
  it("should validate a review submission", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/admin/reviews/${testReviewId}/validate`, {
      method: "POST",
      body: JSON.stringify({ validated: true }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await validateReview(req, { params: { id: testReviewId } });
    console.info("Report created:", res);
    expect(res.status).toBe(200);
    const review = await res.json();
    expect(review.review.validated).toBe(true);
  });
});
