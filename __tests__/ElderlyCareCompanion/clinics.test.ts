import { POST as createClinic, GET as getClinics } from "@/app/api/ElderlyCareCompanion/clinics/route";
import { GET as getClinicById, PUT as updateClinic, DELETE as deleteClinic } from "@/app/api/ElderlyCareCompanion/clinics/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();
let testClinicId: string;

describe("Elderly Care Companion - Clinics API Tests", () => {

  // ✅ Cleanup before running tests
  beforeAll(async () => {
    await prisma.elderlyCareCompanionClinic.deleteMany();
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new clinic", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/clinics", {
      method: "POST",
      body: JSON.stringify({
        name: "City Health Clinic",
        address: "123 Main Street",
        phone: "+1234567890",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createClinic(req);
    expect(res.status).toBe(201);
    const clinic = await res.json();

    expect(clinic).toHaveProperty("id");
    expect(clinic.name).toBe("City Health Clinic");
    testClinicId = clinic.id;
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all clinics", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/clinics");
    const res = await getClinics(req);

    expect(res.status).toBe(200);
    const clinics = await res.json();

    expect(Array.isArray(clinics)).toBeTruthy();
    expect(clinics.length).toBeGreaterThan(0);
  });

  it("should fetch a single clinic by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/clinics/${testClinicId}`);
    const res = await getClinicById(req, { params: { id: testClinicId } });

    expect(res.status).toBe(200);
    const clinic = await res.json();
    expect(clinic.id).toBe(testClinicId);
    expect(clinic.name).toBe("City Health Clinic");
  });

  // =========================
  // ✅ Update Methods (U)
  // =========================
  it("should update a clinic", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/clinics/${testClinicId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated City Health Clinic" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateClinic(req, { params: { id: testClinicId } });
    expect(res.status).toBe(200);
    const clinic = await res.json();

    expect(clinic.name).toBe("Updated City Health Clinic");
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete a clinic", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/clinics/${testClinicId}`, {
      method: "DELETE",
    });

    const res = await deleteClinic(req, { params: { id: testClinicId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Clinic deleted successfully");
  });

  // ✅ Cleanup remaining test data after tests
  afterAll(async () => {
    await prisma.elderlyCareCompanionClinic.deleteMany();
    await prisma.$disconnect();
  });

});
