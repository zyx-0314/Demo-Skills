import { POST as createAppointment, GET as getAppointments } from "@/app/api/ElderlyCareCompanion/appointments/route";
import { GET as getAppointmentById, PUT as updateAppointment, DELETE as deleteAppointment } from "@/app/api/ElderlyCareCompanion/appointments/[id]/route";
import { POST as createUser } from "@/app/api/ElderlyCareCompanion/users/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();
let testAppointmentId: string;
let testUserId: string;

const testEmail = "appointmentECC@gmail.com";

describe("Elderly Care Companion - Appointments API Tests", () => {

  // ✅ Cleanup before running tests
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
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new appointment", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/appointments", {
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

    const res = await createAppointment(req);
    expect(res.status).toBe(201);
    const appointment = await res.json();

    expect(appointment).toHaveProperty("id");
    expect(appointment.userId).toBe(testUserId);
    testAppointmentId = appointment.id;
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all appointments for a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/appointments?userId=${testUserId}`);
    const res = await getAppointments(req);

    expect(res.status).toBe(200);
    const appointments = await res.json();

    expect(Array.isArray(appointments)).toBeTruthy();
    expect(appointments.length).toBeGreaterThan(0);
  });

  it("should fetch a single appointment by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/appointments/${testAppointmentId}`);
    const res = await getAppointmentById(req, { params: { id: testAppointmentId } });

    expect(res.status).toBe(200);
    const appointment = await res.json();
    expect(appointment.id).toBe(testAppointmentId);
    expect(appointment.userId).toBe(testUserId);
  });

  // =========================
  // ✅ Update Methods (U)
  // =========================
  it("should update an appointment", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/appointments/${testAppointmentId}`, {
      method: "PUT",
      body: JSON.stringify({ title: "Updated Doctor Consultation" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateAppointment(req, { params: { id: testAppointmentId } });
    expect(res.status).toBe(200);
    const appointment = await res.json();

    expect(appointment.title).toBe("Updated Doctor Consultation");
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete an appointment", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/appointments/${testAppointmentId}`, {
      method: "DELETE",
    });

    const res = await deleteAppointment(req, { params: { id: testAppointmentId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Appointment deleted successfully");
  });

  // ✅ Cleanup remaining test data after tests
  afterAll(async () => {
    await prisma.elderlyCareCompanionAppointment.deleteMany({ where: { userId: testUserId } });
    await prisma.userElderlyCareCompanion.delete({ where: { id: testUserId } });
    await prisma.$disconnect();
  });

});
