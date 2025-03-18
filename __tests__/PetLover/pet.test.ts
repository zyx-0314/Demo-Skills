import { NextRequest } from "next/server";
import { GET as getPetById, PUT as updatePet, DELETE as deletePet } from "@/app/api/old/PetLover/pets/[id]/route";
import { POST as createPet, GET as getPets } from "@/app/api/old/PetLover/pets/route";
import { POST as createUser } from "@/app/api/old/PetLover/users/route"; // ✅ Import User API

describe("PetLover Pet API Tests", () => {
  let testPetId: string;
  let testUserId: string;

  const testEmail = "testpet@example.com";

  // ✅ Create a user before running the tests
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
  });

  // ✅ Create a new pet
  it("should create a new pet", async () => {
    const req = new NextRequest("http://localhost:3000/api/PetLover/pets", {
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

    const res = await createPet(req);
    expect(res.status).toBe(201);
    const pet = await res.json();
    testPetId = pet.id;
    expect(pet.petName).toBe("Buddy");
  });

  // ✅ Fetch all pets
  it("should fetch all pets", async () => {
    const res = await getPets();
    expect(res.status).toBe(200);
    const pets = await res.json();
    expect(Array.isArray(pets)).toBeTruthy();
    expect(pets.length).toBeGreaterThan(0);
  });

  // ✅ Fetch a pet by ID
  it("should fetch a single pet by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/PetLover/pets/${testPetId}`);
    const res = await getPetById(req, { params: { id: testPetId } });

    expect(res.status).toBe(200);
    const pet = await res.json();
    expect(pet.id).toBe(testPetId);
  });

  // ✅ Update pet details
  it("should update pet details", async () => {
    const req = new NextRequest(`http://localhost:3000/api/PetLover/pets/${testPetId}`, {
      method: "PUT",
      body: JSON.stringify({ petName: "Charlie", breed: "Labrador", age: 4 }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updatePet(req, { params: { id: testPetId } });
    expect(res.status).toBe(200);
    const pet = await res.json();
    expect(pet.petName).toBe("Charlie");
  });

  // ✅ Delete pet
  it("should delete a pet", async () => {
    const req = new NextRequest(`http://localhost:3000/api/PetLover/pets/${testPetId}`, {
      method: "DELETE",
    });

    const res = await deletePet(req, { params: { id: testPetId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Pet deleted successfully");
  });
});
