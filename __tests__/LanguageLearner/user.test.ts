import { POST as createUser, GET as getUsers } from "@/app/api/LanguageLearner/users/route";
import { GET as getUserById, PUT as updateUser, DELETE as deleteUser } from "@/app/api/LanguageLearner/users/[id]/route";
import { PUT as banUser } from "@/app/api/LanguageLearner/admin/users/[id]/ban/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();
let testUserId: string;
let adminUserId: string;
const testEmail = "userECC@gmail.com";
const adminEmail = "adminECC@gmail.com";

describe("Language Learner - User API Tests", () => {

  // =========================
  // ✅ Cleanup Before Tests
  // =========================
  beforeAll(async () => {
    // Delete existing users with the same email
    await prisma.languageLearnerUser.deleteMany({ where: { email: testEmail } });
    await prisma.languageLearnerUser.deleteMany({ where: { email: adminEmail } });

    // Create a new user
    const reqUser = new NextRequest("http://localhost:3000/api/LanguageLearner/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const resUser = await createUser(reqUser);
    expect(resUser.status).toBe(201);
    const user = await resUser.json();
    testUserId = user.id;

    // Create an admin user
    const reqAdmin = new NextRequest("http://localhost:3000/api/LanguageLearner/users", {
      method: "POST",
      body: JSON.stringify({
        email: adminEmail,
        name: "Admin User",
        password: "adminPass",
        role: "admin",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const resAdmin = await createUser(reqAdmin);
    expect(resAdmin.status).toBe(201);
    const admin = await resAdmin.json();
    adminUserId = admin.id;
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new user", async () => {
    const sampleEmail = "newUserECC@gmail.com";

    await prisma.languageLearnerUser.deleteMany({ where: { email: sampleEmail } });

    const req = new NextRequest("http://localhost:3000/api/LanguageLearner/users", {
      method: "POST",
      body: JSON.stringify({
        email: sampleEmail,
        name: "New Test User",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    expect(res.status).toBe(201);
    const user = await res.json();

    expect(user).toHaveProperty("id");
    expect(user.email).toBe(sampleEmail);
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all users", async () => {
    const res = await getUsers();

    expect(res.status).toBe(200);
    const users = await res.json();

    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
  });

  it("should fetch a single user by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/users/${testUserId}`);
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
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/users/${testUserId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Test User" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const user = await res.json();

    expect(user.name).toBe("Updated Test User");
  });

  // =========================
  // ✅ Admin Ban Methods
  // =========================
  it("should ban a user (Admin Only)", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/admin/users/${testUserId}/ban`, {
      method: "PUT",
      body: JSON.stringify({ adminId: adminUserId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await banUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe(`User ${testUserId} has been banned.`);
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete a user (Self-Delete)", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/users/${testUserId}`, {
      method: "DELETE",
    });

    const res = await deleteUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Your account has been deleted successfully.");
  });

  // =========================
  // ✅ Cleanup After Tests
  // =========================
  afterAll(async () => {
    await prisma.languageLearnerUser.deleteMany({ where: { email: testEmail } });
    await prisma.languageLearnerUser.deleteMany({ where: { email: adminEmail } });
    await prisma.$disconnect();
  });

});
