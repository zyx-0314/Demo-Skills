import { POST as createPlatform, GET as getPlatforms } from "@/app/api/LanguageLearner/platforms/route";
import { GET as getPlatformById, PUT as updatePlatform, DELETE as deletePlatform } from "@/app/api/LanguageLearner/platforms/[id]/route";
import { PUT as approvePlatform } from "@/app/api/LanguageLearner/admin/platforms/[id]/approve/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();
let testPlatformId: string;
let testOwnerId: string;
let adminUserId: string;
const testEmail = "platformOwnerECC@gmail.com";
const adminEmail = "adminECC@gmail.com";

describe("Language Learner - Platform API Tests", () => {

  // =========================
  // ✅ Cleanup Before Tests
  // =========================
  beforeAll(async () => {
    // Delete existing users with the same email
    await prisma.languageLearnerUser.deleteMany({ where: { email: testEmail } });
    await prisma.languageLearnerUser.deleteMany({ where: { email: adminEmail } });

    // Create a new owner user
    const reqOwner = new NextRequest("http://localhost:3000/api/LanguageLearner/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test Platform Owner",
        password: "password123",
        role: "owner",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const resOwner = await createPlatform(reqOwner);
    expect(resOwner.status).toBe(201);
    const owner = await resOwner.json();
    testOwnerId = owner.id;

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

    const resAdmin = await createPlatform(reqAdmin);
    expect(resAdmin.status).toBe(201);
    const admin = await resAdmin.json();
    adminUserId = admin.id;
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new platform", async () => {
    const req = new NextRequest("http://localhost:3000/api/LanguageLearner/platforms", {
      method: "POST",
      body: JSON.stringify({
        name: "Test Language Platform",
        website: "https://testplatform.com",
        languagesOffered: "English, Spanish",
        description: "A test platform for learning languages",
        ownerId: testOwnerId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createPlatform(req);
    expect(res.status).toBe(201);
    const platform = await res.json();

    expect(platform).toHaveProperty("id");
    expect(platform.ownerId).toBe(testOwnerId);
    expect(platform.status).toBe("pending");
    testPlatformId = platform.id;
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all platforms", async () => {
    const req = new NextRequest("http://localhost:3000/api/LanguageLearner/platforms");
    const res = await getPlatforms(req);

    expect(res.status).toBe(200);
    const platforms = await res.json();

    expect(Array.isArray(platforms)).toBeTruthy();
    expect(platforms.length).toBeGreaterThan(0);
  });

  it("should fetch a single platform by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/platforms/${testPlatformId}`);
    const res = await getPlatformById(req, { params: { id: testPlatformId } });

    expect(res.status).toBe(200);
    const platform = await res.json();
    expect(platform.id).toBe(testPlatformId);
    expect(platform.ownerId).toBe(testOwnerId);
  });

  // =========================
  // ✅ Update Methods (U)
  // =========================
  it("should update a platform (Owner Only)", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/platforms/${testPlatformId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Test Language Platform" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updatePlatform(req, { params: { id: testPlatformId } });
    expect(res.status).toBe(200);
    const platform = await res.json();

    expect(platform.name).toBe("Updated Test Language Platform");
  });

  // =========================
  // ✅ Admin Approve Methods
  // =========================
  it("should approve a platform (Admin Only)", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/admin/platforms/${testPlatformId}/approve`, {
      method: "PUT",
      body: JSON.stringify({ adminId: adminUserId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await approvePlatform(req, { params: { id: testPlatformId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.platform.status).toBe("approved");
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete a platform (Owner Only)", async () => {
    const req = new NextRequest(`http://localhost:3000/api/LanguageLearner/platforms/${testPlatformId}`, {
      method: "DELETE",
      body: JSON.stringify({ ownerId: testOwnerId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await deletePlatform(req, { params: { id: testPlatformId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Platform deleted successfully");
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
