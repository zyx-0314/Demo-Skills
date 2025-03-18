import { NextRequest } from "next/server";
import { POST as createPost, GET as getPosts } from "@/app/api/DIYHomes/posts/route";
import { GET as getPostById, PUT as updatePost, DELETE as deletePost } from "@/app/api/DIYHomes/posts/[id]/route";
import { POST as createUser } from "@/app/api/users/route"; // ✅ Import User API

describe("DIYHome Post API Tests", () => {
  let testPostId: string;
  let testUserId: string;

  const testEmail = "testpost@example.com";

  // ✅ Create a user before running the tests
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test User",
        password: "password123",
        group: "member",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    const user = await res.json();
    testUserId = user.id; // ✅ Store valid user ID
  });

  // ✅ Create a new DIY post
  it("should create a new DIY post", async () => {
    const req = new NextRequest("http://localhost:3000/api/DIYHomes/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "DIY Table",
        content: "How to make a DIY table",
        category: "woodwork",
        userId: testUserId, // ✅ Use valid user ID
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createPost(req);
    expect(res.status).toBe(201);
    const post = await res.json();
    testPostId = post.id;
    expect(post.title).toBe("DIY Table");
  });

  // ✅ Fetch all posts
  it("should fetch all posts", async () => {
    const res = await getPosts();
    expect(res.status).toBe(200);
    const posts = await res.json();
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  // ✅ Fetch a post by ID
  it("should fetch a single post by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/DIYHomes/posts/${testPostId}`);
    const res = await getPostById(req, { params: { id: testPostId } });

    expect(res.status).toBe(200);
    const post = await res.json();
    expect(post.id).toBe(testPostId);
  });

  // ✅ Update post details
  it("should update a post", async () => {
    const req = new NextRequest(`http://localhost:3000/api/DIYHomes/posts/${testPostId}`, {
      method: "PUT",
      body: JSON.stringify({ title: "Updated DIY Table" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updatePost(req, { params: { id: testPostId } });
    expect(res.status).toBe(200);
    const post = await res.json();
    expect(post.title).toBe("Updated DIY Table");
  });

  // ✅ Delete post
  it("should delete a post", async () => {
    const req = new NextRequest(`http://localhost:3000/api/DIYHomes/posts/${testPostId}`, {
      method: "DELETE",
    });

    const res = await deletePost(req, { params: { id: testPostId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Post deleted successfully");
  });
});
