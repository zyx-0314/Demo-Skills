import { POST as createUser, GET as getUsers } from "@/app/api/UrbanExplorer/users/route";
import { GET as getUserById, PUT as updateUser, DELETE as deleteUser } from "@/app/api/UrbanExplorer/users/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

describe("UrbanExplorer User API Tests", () => {
  let testUserId: string;
  const testEmail = "urbanexplorer_test@example.com";

  // ✅ Cleanup before running tests
  beforeAll(async () => {
    await prisma.userUrbanExplorer.deleteMany({ where: { email: testEmail } });
  });

  // ✅ Cleanup after tests
  afterAll(async () => {
    await prisma.userUrbanExplorer.deleteMany({ where: { email: testEmail } });
    await prisma.$disconnect();
  });

  // ✅ Create a new user
  it("should create a new user", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Urban Explorer User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    expect(res.status).toBe(201);
    const user = await res.json();

    expect(user).toHaveProperty("id");
    expect(user.email).toBe(testEmail);
    testUserId = user.id;
  });

  // ✅ Fetch all users
  it("should fetch all users", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/users");
    const res = await getUsers(req);

    expect(res.status).toBe(200);
    const users: { id: string; email: string; name: string }[] = await res.json();

    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users.some((user) => user.email === testEmail)).toBeTruthy();
  });

  // ✅ Fetch a user by ID
  it("should fetch a single user by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/users/${testUserId}`);
    const res = await getUserById(req, { params: { id: testUserId } });

    expect(res.status).toBe(200);
    const user = await res.json();
    expect(user.id).toBe(testUserId);
    expect(user.email).toBe(testEmail);
  });

  // ✅ Update user details
  it("should update a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/users/${testUserId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Urban Explorer" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const user = await res.json();

    expect(user.name).toBe("Updated Urban Explorer");
  });

  // ✅ Prevent duplicate user creation
  it("should prevent creating a user with the same email", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Duplicate User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    expect(res.status).toBe(409); // Conflict error
    const data = await res.json();
    expect(data.error).toBe("User already exists");
  });

  // ✅ Ensure fetching a non-existent user returns 404
  it("should return 404 for non-existent user", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/users/invalid-user-id");
    const res = await getUserById(req, { params: { id: "invalid-user-id" } });

    expect(res.status).toBe(404);
    const data = await res.json();
    expect(data.error).toBe("User not found");
  });

  // ✅ Delete a user
  it("should delete a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/users/${testUserId}`, {
      method: "DELETE",
    });

    const res = await deleteUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("User deleted successfully");
  });
});
