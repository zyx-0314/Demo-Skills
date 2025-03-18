import { NextRequest } from "next/server";
import { POST as createUser } from "@/app/api/old/DIYHomes/users/route";
import { POST as createPost } from "@/app/api/old/DIYHomes/posts/route";
import { POST as createReport } from "@/app/api/old/DIYHomes/reports/route";

describe("User Report API Tests", () => {
  let testReportId: string;
  let testPostId: string;
  let testUserId: string;

  beforeAll(async () => {
    console.log("Setting up test user and post...");
    console.log("Creating test admin user...");
    const adminReq = new NextRequest("http://localhost:3000/api/DIYHomes/users", {
      method: "POST",
      body: JSON.stringify({
        email: "userReportTest@example.com",
        name: "Admin User",
        password: "admin123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const adminRes = await createUser(adminReq);
    const admin = await adminRes.json();
    testUserId = admin.id;
    console.log("Test admin user created:", testUserId);

    console.log("Creating test post...");
    const postReq = new NextRequest("http://localhost:3000/api/DIYHomes/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "DIY Table",
        content: "How to make a DIY table",
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

  it("should allow a user to report a post", async () => {
    console.log("Creating a test report...");
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/reports", {
      method: "POST",
      body: JSON.stringify({
        postId: testPostId,
        userId: testUserId,
        reason: "Spam content",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createReport(req);
    expect(res.status).toBe(201);

    const data = await res.json();
    testReportId = data.id;
    console.log("Test report created:", testReportId);

    expect(data).toHaveProperty("id");
    expect(data.postId).toBe(testPostId);
    expect(data.userId).toBe(testUserId);
  });
});
