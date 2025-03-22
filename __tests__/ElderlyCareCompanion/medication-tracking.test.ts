import { POST as logMedicationIntake } from "@/app/api/ElderlyCareCompanion/medication-tracking/route";
import { GET as getMedicationTrackingHistory } from "@/app/api/ElderlyCareCompanion/medication-tracking/[user_id]/route";
import { POST as createUser } from "@/app/api/ElderlyCareCompanion/users/route";
import { POST as createAppointment } from "@/app/api/ElderlyCareCompanion/appointments/route";

import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();
let testTrackingId: string;
let testUserId: string; // Replace with a valid test user ID
let testAppointmentId: string; // Replace with a valid test appointment ID

const testEmail = "medicationtrackingECC@gmail.com";

describe("Elderly Care Companion - Medication Tracking API Tests", () => {

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

    // create a new appointment
    const reqAppointment = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/appointments", {
      method: "POST",
      body: JSON.stringify({
        userId: testUserId,
        type: "appointment",
        title: "Doctor Consultation",
        dateTime: new Date().toISOString(),
        location: "City Hospital",
        medicationDetails: null,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const resAppointment = await createAppointment(reqAppointment);
    expect(resAppointment.status).toBe(201);
    const appointment = await resAppointment.json();
    testAppointmentId = appointment.id;

    // delete all existing medication tracking logs for the user
    await prisma.elderlyCareCompanionMedicationTracking.deleteMany({ where: { userId: testUserId } });
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should log a medication intake", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/medication-tracking", {
      method: "POST",
      body: JSON.stringify({
        userId: testUserId,
        medicationId: testAppointmentId,
        status: "taken",
        dateTime: new Date().toISOString(),
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await logMedicationIntake(req);
    expect(res.status).toBe(201);
    const tracking = await res.json();

    expect(tracking).toHaveProperty("id");
    expect(tracking.userId).toBe(testUserId);
    testTrackingId = tracking.id;
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch medication tracking history for a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/medication-tracking/${testUserId}`);
    const res = await getMedicationTrackingHistory(req, { params: { user_id: testUserId } });

    expect(res.status).toBe(200);
    const logs = await res.json();

    expect(Array.isArray(logs)).toBeTruthy();
    expect(logs.length).toBeGreaterThan(0);
  });

  // =========================
  // ✅ Cleanup remaining test data after tests
  // =========================
  afterAll(async () => {
    await prisma.elderlyCareCompanionMedicationTracking.deleteMany({ where: { userId: testUserId } });
    await prisma.elderlyCareCompanionAppointment.deleteMany({ where: { userId: testUserId } });
    await prisma.userElderlyCareCompanion.deleteMany({ where: { email: testEmail } });
    await prisma.$disconnect();
  });

});
