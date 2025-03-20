import { POST as createHealthRecord, GET as getHealthRecords } from "@/app/api/ElderlyCareCompanion/records/route";
import { GET as getHealthRecordById, PUT as updateHealthRecord, DELETE as deleteHealthRecord } from "@/app/api/ElderlyCareCompanion/records/[id]/route";
import { POST as createUser } from "@/app/api/ElderlyCareCompanion/users/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();
let testHealthRecordId: string;
let testUserId: string; // Replace with a valid test user ID

const testEmail = "healthRecordECC@gmail.com";

describe("Elderly Care Companion - Health Records API Tests", () => {
  // =========================
  // ✅ Cleanup before running tests
  // =========================
  beforeAll(async () => {
    // delete existing user with the same email
    await prisma.userElderlyCareCompanion.deleteMany({ where: { email: testEmail } });

    // create a new user
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Elderly Care User Test Case",
        password: "password123",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    expect(res.status).toBe(201);
    const user = await res.json();
    testUserId = user.id;

    // delete all existing health records for the user
    await prisma.elderlyCareCompanionRecord.deleteMany({ where: { userId: testUserId } });
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new health record", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/records", {
      method: "POST",
      body: JSON.stringify({
        userId: testUserId,
        recordType: "medicalHistory",
        details: "Diagnosed with hypertension",
        date: new Date().toISOString(),
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createHealthRecord(req);
    expect(res.status).toBe(201);
    const record = await res.json();

    expect(record).toHaveProperty("id");
    expect(record.userId).toBe(testUserId);
    testHealthRecordId = record.id;
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all health records for a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/records?userId=${testUserId}`);
    const res = await getHealthRecords(req);

    expect(res.status).toBe(200);
    const records = await res.json();

    expect(Array.isArray(records)).toBeTruthy();
    expect(records.length).toBeGreaterThan(0);
  });

  it("should fetch a single health record by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/records/${testHealthRecordId}`);
    const res = await getHealthRecordById(req, { params: { id: testHealthRecordId } });

    expect(res.status).toBe(200);
    const record = await res.json();
    expect(record.id).toBe(testHealthRecordId);
    expect(record.userId).toBe(testUserId);
  });

  // =========================
  // ✅ Update Methods (U)
  // =========================
  it("should update a health record", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/records/${testHealthRecordId}`, {
      method: "PUT",
      body: JSON.stringify({ details: "Updated: Diagnosed with hypertension & diabetes" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateHealthRecord(req, { params: { id: testHealthRecordId } });
    expect(res.status).toBe(200);
    const record = await res.json();

    expect(record.details).toBe("Updated: Diagnosed with hypertension & diabetes");
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete a health record", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/records/${testHealthRecordId}`, {
      method: "DELETE",
    });

    const res = await deleteHealthRecord(req, { params: { id: testHealthRecordId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Health record deleted successfully");
  });

  // =========================
  // ✅ Cleanup remaining test data after tests
  // =========================
  afterAll(async () => {
    await prisma.elderlyCareCompanionRecord.deleteMany({ where: { userId: testUserId } });
    await prisma.userElderlyCareCompanion.deleteMany({ where: { email: testEmail } });
    await prisma.$disconnect();
  });

});
