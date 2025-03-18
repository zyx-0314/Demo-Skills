import { POST as createPlace, GET as getPlaces } from "@/app/api/UrbanExplorer/places/route";
import { GET as getPlaceById, PUT as updatePlace, DELETE as deletePlace } from "@/app/api/UrbanExplorer/places/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";
import { POST as createUser } from "@/app/api/UrbanExplorer/users/route"; // ✅ Import User API

const prisma = new PostgresqlClient();

describe("UrbanExplorer - Places API Tests", () => {
  let testPlaceId: string;
  let testUserId: string;

  const testEmail = "UrbanExplorerPlaces@example.com";

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

  beforeAll(async () => {
    await prisma.placeUrbanExplorer.deleteMany({});
  });

  afterAll(async () => {
    await prisma.placeUrbanExplorer.deleteMany({});
    await prisma.$disconnect();
  });

  // ✅ Create a new place
  it("should create a new place", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/places", {
      method: "POST",
      body: JSON.stringify({
        name: "Test Place",
        category: "Historical",
        location: "Test City",
        description: "A historical place",
        ownerId: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createPlace(req);
    expect(res.status).toBe(201);
    const place = await res.json();

    expect(place).toHaveProperty("id");
    expect(place.name).toBe("Test Place");
    testPlaceId = place.id;
  });

  // ✅ Fetch all places
  it("should fetch all places", async () => {
    const res = await getPlaces();

    expect(res.status).toBe(200);
    const places = await res.json();

    expect(Array.isArray(places)).toBeTruthy();
    expect(places.length).toBeGreaterThan(0);
  });

  // ✅ Fetch a place by ID
  it("should fetch a single place by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/places/${testPlaceId}`);
    const res = await getPlaceById(req, { params: { id: testPlaceId } });

    expect(res.status).toBe(200);
    const place = await res.json();
    expect(place.id).toBe(testPlaceId);
  });

  // ✅ Update a place
  it("should update a place", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/places/${testPlaceId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Test Place" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updatePlace(req, { params: { id: testPlaceId } });
    expect(res.status).toBe(200);
    const place = await res.json();

    expect(place.name).toBe("Updated Test Place");
  });

  // ✅ Delete a place
  it("should delete a place", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/places/${testPlaceId}`, {
      method: "DELETE",
    });

    const res = await deletePlace(req, { params: { id: testPlaceId } });
    expect(res.status).toBe(200);
  });
});
