import { NextRequest } from "next/server";
import { POST as createVaccination, GET as getVaccinations } from "@/app/api/old/PetLover/vaccinations/route";
import { POST as createPet } from "@/app/api/old/PetLover/pets/route";
import { POST as createUser } from "@/app/api/old/PetLover/users/route"; // ✅ Import User API

describe("PetLover Vaccination API Tests", () => {
  let testPetId: string;
  let testUserId: string;

  const testEmail = "testpet@example.com";

  beforeAll(async () => {
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
    const user = await res.json();
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
    expect(pet.petName).toBe("Buddy");
  });

  it("should add a vaccination record", async () => {
    const req = new NextRequest("http://localhost:3000/api/PetLover/vaccinations", {
      method: "POST",
      body: JSON.stringify({
        petId: testPetId,
        vaccineName: "Rabies",
        dateAdministered: "2024-05-15T00:00:00Z",
        nextDueDate: "2025-05-15T00:00:00Z",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createVaccination(req);
    console.log(res);
    expect(res.status).toBe(201);
  });

  it("should fetch all vaccination records", async () => {
    const res = await getVaccinations();
    console.log(res);
    expect(res.status).toBe(200);
    const vaccinations = await res.json();
    expect(Array.isArray(vaccinations)).toBeTruthy();
  });
});
