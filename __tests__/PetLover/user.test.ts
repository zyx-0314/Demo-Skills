import { POST as createUser, GET as getUsers } from "@/app/api/old/PetLover/users/route";
import { GET as getUserById, PUT as updateUser } from "@/app/api/old/PetLover/users/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

describe("User Management API Tests", () => {
  let testUserId: string;
  const testEmail = "testuser@example.com";

  // ✅ Cleanup before running tests
  beforeAll(async () => {
    await prisma.userPetLover.deleteMany({ where: { email: testEmail } });
  });

  // ✅ Cleanup after tests
  afterAll(async () => {
    await prisma.userPetLover.deleteMany({ where: { email: testEmail } });
    await prisma.$disconnect();
  });

  // ✅ Create a new user
  it("should create a new user", async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test User",
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

  // ✅ Fetch all users (Fixed Issue 1)
  it("should fetch all users", async () => {
    const req = new NextRequest("http://localhost:3000/api/users");
    const res = await getUsers(req); // ✅ Pass req argument

    expect(res.status).toBe(200);
    const users: { id: string; email: string; name: string }[] = await res.json(); // ✅ Fix Issue 2

    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users.some((user) => user.email === testEmail)).toBeTruthy(); // ✅ Fix: Explicit typing for `user`
  });

  // ✅ Fetch a user by ID
  it("should fetch a single user by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/users/${testUserId}`);
    const res = await getUserById(req, { params: { id: testUserId } });

    expect(res.status).toBe(200);
    const user = await res.json();
    expect(user.id).toBe(testUserId);
    expect(user.email).toBe(testEmail);
  });

  // ✅ Update user details
  it("should update a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/users/${testUserId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated User" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const user = await res.json();

    expect(user.name).toBe("Updated User");
  });

  // ✅ Ensure duplicate user creation is prevented
  it("should prevent creating a user with the same email", async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
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

  // ✅ Ensure user limit per group (Max 50)
  it("should prevent creating more than 50 users in a group", async () => {
    const usersToCreate = [];
    for (let i = 0; i < 50; i++) {
      usersToCreate.push(
        prisma.userPetLover.create({
          data: {
            email: `user${i}@example.com`,
            name: `User ${i}`,
            password: "password123",
          },
        })
      );
    }
    await Promise.all(usersToCreate);

    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: "exceeding@example.com",
        name: "Exceeding User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    expect(res.status).toBe(403); // Forbidden due to limit
    const data = await res.json();
    expect(data.error).toContain("Group 'testgroup' has reached the maximum limit of 50 users");
  });

  // ✅ Ensure fetching a non-existent user returns 404
  it("should return 404 for non-existent user", async () => {
    const req = new NextRequest("http://localhost:3000/api/users/invalid-user-id");
    const res = await getUserById(req, { params: { id: "invalid-user-id" } });

    expect(res.status).toBe(404);
    const data = await res.json();
    expect(data.error).toBe("User not found");
  });
});
