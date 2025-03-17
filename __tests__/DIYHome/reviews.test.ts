import { NextRequest } from "next/server";
import { POST as createReview, GET as getReviews } from "@/app/api/DIYHomes/reviews/route";
import { PUT as updateReview, DELETE as deleteReview } from "@/app/api/DIYHomes/reviews/[id]/route";
import { POST as createUser } from "@/app/api/users/route";
import { POST as createPost } from "@/app/api/DIYHomes/posts/route";

describe("DIYHome Reviews API Tests", () => {
  let testUserId: string;
  let testPostId: string;
  let testReviewId: string;

  // ✅ Create a test user & post before running review tests
  beforeAll(async () => {
    console.log("Creating test user...");
    const userReq = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: "reviewuser@example.com",
        name: "Review User",
        password: "password123",
        group: "member",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const userRes = await createUser(userReq);
    const user = await userRes.json();
    testUserId = user.id;
    console.log("Test user created:", testUserId);

    console.log("Creating test post...");
    const postReq = new NextRequest("http://localhost:3000/api/DIYHomes/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "DIY Chair",
        content: "How to make a DIY chair",
        category: "woodwork",
        userId: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const postRes = await createPost(postReq);
    const post = await postRes.json();
    testPostId = post.id;
    console.log("Test post created:", testPostId);
  });

  // ✅ Create a new review
  it("should create a new review", async () => {
    console.log("Creating test review...");
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/reviews", {
      method: "POST",
      body: JSON.stringify({
        postId: testPostId,
        userId: testUserId,
        rating: 5,
        comment: "Great DIY project!",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createReview(req);
    expect(res.status).toBe(201);
    const review = await res.json();
    testReviewId = review.id;
    console.log("Test review created:", testReviewId);
    expect(review.rating).toBe(5);
  });

  // ✅ Fetch all reviews for a post
  it("should fetch all reviews for a post", async () => {
    console.log("Fetching all reviews...");
    const res = await getReviews(new NextRequest(`http://localhost:3000/api/DIYHomes/reviews?postId=${testPostId}`));
    expect(res.status).toBe(200);
    const reviews = await res.json();
    console.log("Fetched reviews:", reviews);
    expect(Array.isArray(reviews)).toBeTruthy();
    expect(reviews.length).toBeGreaterThan(0);
  });

  // ✅ Update review
  it("should update a review", async () => {
    console.log("Updating test review...");
    const req = new NextRequest(`http://localhost:3000/api/DIYHomes/reviews/${testReviewId}`, {
      method: "PUT",
      body: JSON.stringify({ rating: 4, comment: "Updated review comment!" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateReview(req, { params: { id: testReviewId } });
    expect(res.status).toBe(200);
    const review = await res.json();
    console.log("Updated review:", review);
    expect(review.rating).toBe(4);
    expect(review.comment).toBe("Updated review comment!");
  });

  // ✅ Delete review
  it("should delete a review", async () => {
    console.log("Deleting test review...");
    const req = new NextRequest(`http://localhost:3000/api/DIYHomes/reviews/${testReviewId}`, {
      method: "DELETE",
    });

    const res = await deleteReview(req, { params: { id: testReviewId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    console.log("Deleted review:", data);
    expect(data.message).toBe("Review deleted successfully");
  });
});
