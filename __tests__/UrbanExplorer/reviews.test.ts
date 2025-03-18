import { POST as createReview } from "@/app/api/UrbanExplorer/reviews/route";
import { NextRequest } from "next/server";

describe("UrbanExplorer Reviews API Tests", () => {
  it("should create a review", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/reviews", {
      method: "POST",
      body: JSON.stringify({
        placeId: "1",
        userId: "1",
        rating: 5,
        comment: "Great test place!",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createReview(req);
    expect(res.status).toBe(201);
    const review = await res.json();

    expect(review).toHaveProperty("id");
    expect(review.comment).toBe("Great test place!");
  });
});
