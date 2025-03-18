import { POST as createReview, GET as getReviews } from "@/app/api/old/UrbanExplorer/reviews/route";
import { PUT as updateReview, DELETE as deleteReview } from "@/app/api/old/UrbanExplorer/reviews/[id]/route";
import { POST as createUser } from "@/app/api/old/UrbanExplorer/users/route"; // ✅ Import User API
import { POST as createPlace } from "@/app/api/old/UrbanExplorer/places/route";
import { NextRequest } from "next/server";

describe("UrbanExplorer - Reviews API Tests", () => {
  let testPlaceId: string;
  let testUserId: string;
  let testReviewId: string;

  beforeAll(async () => {
    // ✅ Create a test user and place
    const userRes = await createUser(new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ email: "reviewer@example.com", name: "Reviewer User", password: "review123" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }));
    const user = await userRes.json();
    testUserId = user.id;

    const placeRes = await createPlace(new NextRequest("http://localhost:3000/api/UrbanExplorer/places", {
      method: "POST",
      body: JSON.stringify({ name: "Review Place", category: "Cafe", location: "Test Street", description: "Great place to visit", ownerId: testUserId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }));
    const place = await placeRes.json();
    testPlaceId = place.id;
  });

  // ✅ Add a review
  it("should add a review", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/reviews", {
      method: "POST",
      body: JSON.stringify({ placeId: testPlaceId, userId: testUserId, rating: 5, comment: "Amazing place!" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createReview(req);
    console.info("Review created:", res);
    expect(res.status).toBe(201);
    const review = await res.json();
    testReviewId = review.id;
  });

  // ✅ Fetch all reviews for a place
  it("should fetch reviews for a place", async () => {
    const res = await getReviews(
      new NextRequest(`http://localhost:3000/api/UrbanExplorer/reviews?placeId=${testPlaceId}`)
    );
    expect(res.status).toBe(200);
    const reviews = await res.json();
    expect(Array.isArray(reviews)).toBeTruthy();
  });

  // ✅ Update a review
  it("should update a review", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/reviews/${testReviewId}`, {
      method: "PUT",
      body: JSON.stringify({ rating: 4, comment: "Updated review!" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateReview(req, { params: { id: testReviewId } });
    expect(res.status).toBe(200);
  });

  // ✅ Delete a review
  it("should delete a review", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/reviews/${testReviewId}`, { method: "DELETE" });
    const res = await deleteReview(req, { params: { id: testReviewId } });
    expect(res.status).toBe(200);
  });
});
