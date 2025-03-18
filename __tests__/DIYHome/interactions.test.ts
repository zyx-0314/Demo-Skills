import { NextRequest } from "next/server";
import { POST as likePost, DELETE as unlikePost } from "@/app/api/old/DIYHomes/interactions/likes/route";
import { POST as createUser } from "@/app/api/old/DIYHomes/users/route";
import { POST as createPost } from "@/app/api/old/DIYHomes/posts/route";

describe("DIYHome Likes & Bookmarks API Tests", () => {
  let testUserId: string;
  let testPostId: string;

  beforeAll(async () => {
    const userReq = new NextRequest("http://localhost:3000/api/DIYHomes/users", {
      method: "POST",
      body: JSON.stringify({
        email: "interactionuser@example.com",
        name: "Interaction User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const userRes = await createUser(userReq);
    const user = await userRes.json();
    testUserId = user.id;

    const postReq = new NextRequest("http://localhost:3000/api/DIYHomes/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "DIY Bench",
        content: "How to build a DIY bench",
        category: "woodwork",
        userId: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const postRes = await createPost(postReq);
    const post = await postRes.json();
    testPostId = post.id;
  });

  it("should like a post", async () => {
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/interactions/likes", {
      method: "POST",
      body: JSON.stringify({ postId: testPostId, userId: testUserId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await likePost(req);
    expect(res.status).toBe(201);
  });

  it("should unlike a post", async () => {
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/interactions/likes", {
      method: "DELETE",
      body: JSON.stringify({ postId: testPostId, userId: testUserId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await unlikePost(req);
    expect(res.status).toBe(200);
  });
});
