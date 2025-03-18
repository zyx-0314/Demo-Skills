import { NextRequest } from "next/server";
import { POST as createAppointment, GET as getAppointments } from "@/app/api/PetLover/appointments/route";
import { DELETE as deleteAppointment } from "@/app/api/PetLover/appointments/[id]/route";
import { POST as createUser } from "@/app/api/users/route"; // ✅ Import User API
import { POST as createPet } from "@/app/api/PetLover/pets/route";

describe("PetLover Appointment API Tests", () => {
  let testAppointmentId: string;
  let testPetId: string;
  let testUserId: string;

  const testEmail = "testappointment@example.com";

  // ✅ Create an appointment
  it("should create an appointment", async () => {
    const reqUser = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test User",
        password: "password123",
        group: "member",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const resUser = await createUser(reqUser);
    const user = await resUser.json();
    testUserId = user.id; // ✅ Store valid user ID

    const reqPet = new NextRequest("http://localhost:3000/api/PetLover/pets", {
      method: "POST",
      body: JSON.stringify({
        userId: testUserId,
        petName: "Buddy",
        species: "Dog",
        breed: "Golden Retriever",
        age: 3,
        medicalHistory: "Healthy",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const resPet = await createPet(reqPet);
    expect(resPet.status).toBe(201);
    const pet = await resPet.json();
    testPetId = pet.id;

    const req = new NextRequest("http://localhost:3000/api/PetLover/appointments", {
      method: "POST",
      body: JSON.stringify({
        userId: testUserId,
        petId: testPetId,
        appointmentType: "Grooming",
        dateTime: "2024-06-01T10:00:00Z",
        location: "Pet Spa Center",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createAppointment(req);
    expect(res.status).toBe(201);
    const appointment = await res.json();
    testAppointmentId = appointment.id;
    expect(appointment.appointmentType).toBe("Grooming");
  });

  // ✅ Fetch all appointments
  it("should fetch all appointments", async () => {
    const res = await getAppointments();
    expect(res.status).toBe(200);
    const appointments = await res.json();
    expect(Array.isArray(appointments)).toBeTruthy();
  });

  // ✅ Delete an appointment
  it("should delete an appointment", async () => {
    const req = new NextRequest(`http://localhost:3000/api/PetLover/appointments/${testAppointmentId}`, {
      method: "DELETE",
    });

    const res = await deleteAppointment(req, { params: { id: testAppointmentId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Appointment deleted successfully");
  });
});
