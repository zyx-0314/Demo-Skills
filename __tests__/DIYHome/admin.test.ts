import { NextRequest } from "next/server";
import { GET as getUsers, DELETE as banUser } from "@/app/api/old/DIYHomes/admin/users/route";
import { GET as getPosts, DELETE as deletePost } from "@/app/api/old/DIYHomes/admin/posts/route";
import { GET as getReports, DELETE as deleteReport } from "@/app/api/old/DIYHomes/admin/reports/route";
import { POST as createUser } from "@/app/api/old/DIYHomes/users/route";
import { POST as createPost } from "@/app/api/old/DIYHomes/posts/route";
import { POST as createReport } from "@/app/api/old/DIYHomes/reports/route";

import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

describe("Admin API Tests", () => {
  let testAdminId: string;
  let testUserId: string;
  let testPostId: string;
  let testReportId: string;

  const testEmailAdmin = "testadmin@example.com";
  const testEmailUser = "testUserAdmin@example.com";

  beforeAll(async () => {
    // ✅ Cleanup user before running tests
    await prisma.userDIYHomes.deleteMany({ where: { email: testEmailAdmin } });
    await prisma.userDIYHomes.deleteMany({ where: { email: testEmailUser } });

    console.log("Creating test admin user...");
    const adminReq = new NextRequest("http://localhost:3000/api/DIYHomes/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmailAdmin,
        name: "Admin User",
        password: "admin123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const adminRes = await createUser(adminReq);
    const admin = await adminRes.json();
    testAdminId = admin.id;
    console.log("Test admin user created:", testAdminId);

    console.log("Creating test normal user...");
    const userReq = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmailUser,
        name: "Test User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const userRes = await createUser(userReq);
    const user = await userRes.json();
    testUserId = user.id;
    console.log("Test user created:", testUserId);

    // ✅ Create a post
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

    // ✅ Create a report
    console.log("Creating test report...");
    console.log("User: ", testUserId);
    console.log("Post: ", testPostId);
    const reportReq = new NextRequest("http://localhost:3000/api/DIYHomes/reports", {
      method: "POST",
      body: JSON.stringify({
        postId: testPostId,
        userId: testUserId,
        reason: "Spam content",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const reportRes = await createReport(reportReq);
    const report = await reportRes.json();
    testReportId = report.id;
    console.log("Test report created:", testReportId);
  });

  // ✅ Get all reports
  it("should fetch all reports", async () => {
    console.log("Fetching all reports...");
    const res = await getReports();
    expect(res.status).toBe(200);
    const reports = await res.json();
    console.log("Reports fetched:", reports);
    expect(Array.isArray(reports)).toBeTruthy();
    expect(reports.length).toBeGreaterThan(0);
  });

  // ✅ Delete a report
  it("should delete a report", async () => {
    console.log("Deleting test report...");
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/admin/reports", {
      method: "DELETE",
      body: JSON.stringify({ reportId: testReportId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await deleteReport(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    console.log("Report deleted:", data);
    expect(data.message).toBe("Report deleted successfully");

    // ✅ Verify report is deleted
    const fetchRes = await getReports();
    const reportsAfterDelete = await fetchRes.json();
    expect(reportsAfterDelete.find((r: any) => r.id === testReportId)).toBeUndefined();
  });

  // ✅ Get all posts
  it("should fetch all posts", async () => {
    console.log("Fetching all posts...");
    const res = await getPosts();
    expect(res.status).toBe(200);
    const posts = await res.json();
    console.log("Posts fetched:", posts);
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  // ✅ Delete a post
  it("should delete a post", async () => {
    console.log("Deleting test post...");
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/admin/posts", {
      method: "DELETE",
      body: JSON.stringify({ postId: testPostId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await deletePost(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    console.log("Post deleted:", data);
    expect(data.message).toBe("Post deleted successfully");

    // ✅ Verify post is deleted
    const fetchRes = await getPosts();
    const postsAfterDelete = await fetchRes.json();
    expect(postsAfterDelete.find((p: any) => p.id === testPostId)).toBeUndefined();
  });

  // ✅ Get all users
  it("should fetch all users", async () => {
    console.log("Fetching all users...");
    const res = await getUsers();
    expect(res.status).toBe(200);
    const users = await res.json();
    console.log("Users fetched:", users);
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
  });

  // ✅ Ban a user
  it("should ban a user", async () => {
    console.log("Banning test user...");
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/admin/users", {
      method: "DELETE",
      body: JSON.stringify({ userId: testUserId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await banUser(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    console.log("User banned:", data);
    expect(data.message).toBe("User banned successfully");
  });
});
