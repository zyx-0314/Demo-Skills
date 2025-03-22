import { POST as createUser, GET as getUsers } from "@/app/api/ElderlyCareCompanion/users/route";
import { GET as getUserById, PUT as updateUser, DELETE as deleteUser } from "@/app/api/ElderlyCareCompanion/users/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();
let testUserId: string;
const testEmail = "elderlycare_test@example.com";

describe("Elderly Care Companion - Users API Tests", () => {

  // =========================
  // ✅ Cleanup before running tests
  // =========================

  beforeAll(async () => {
    await prisma.userElderlyCareCompanion.deleteMany({ where: { email: testEmail } });
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new user", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Elderly Care User",
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

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all users", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/users");
    const res = await getUsers(req);

    expect(res.status).toBe(200);
    const users: { id: string; email: string; name: string }[] = await res.json();

    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users.some((user) => user.email === testEmail)).toBeTruthy();
  });

  it("should fetch a single user by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/users/${testUserId}`);
    const res = await getUserById(req, { params: { id: testUserId } });

    expect(res.status).toBe(200);
    const user = await res.json();
    expect(user.id).toBe(testUserId);
    expect(user.email).toBe(testEmail);
  });

  // =========================
  // ✅ Update Methods (U)
  // =========================
  it("should update a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/users/${testUserId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Elderly Care User" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const user = await res.json();

    expect(user.name).toBe("Updated Elderly Care User");
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/users/${testUserId}`, {
      method: "DELETE",
    });

    const res = await deleteUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("User deleted successfully");
  });

  // =========================
  // ✅ Cleanup remaining test data after tests
  // =========================
  afterAll(async () => {
    await prisma.userElderlyCareCompanion.deleteMany({ where: { email: testEmail } });
    await prisma.$disconnect();
  });

});
