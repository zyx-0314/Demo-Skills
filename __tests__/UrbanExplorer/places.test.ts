import { POST as createPlace, GET as getPlaces } from "@/app/api/UrbanExplorer/places/route";
import { GET as getPlaceById, PUT as updatePlace, DELETE as deletePlace } from "@/app/api/UrbanExplorer/places/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

describe("UrbanExplorer Places API Tests", () => {
  let testPlaceId: string;
  const testPlaceName = "Urban Test Place";

  // ✅ Cleanup before running tests
  beforeAll(async () => {
    await prisma.placeUrbanExplorer.deleteMany({ where: { name: testPlaceName } });
  });

  // ✅ Cleanup after tests
  afterAll(async () => {
    await prisma.placeUrbanExplorer.deleteMany({ where: { name: testPlaceName } });
    await prisma.$disconnect();
  });

  // ✅ Create a new place
  it("should create a new place", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/places", {
      method: "POST",
      body: JSON.stringify({
        name: testPlaceName,
        category: "Test Category",
        location: "Test City",
        description: "A test description",
        ownerId: "1",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createPlace(req);
    expect(res.status).toBe(201);
    const place = await res.json();

    expect(place).toHaveProperty("id");
    expect(place.name).toBe(testPlaceName);
    testPlaceId = place.id;
  });

  // ✅ Fetch all places
  it("should fetch all places", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/places");
    const res = await getPlaces(req);

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
    expect(place.name).toBe(testPlaceName);
  });

  // ✅ Update place details
  it("should update a place", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/places/${testPlaceId}`, {
      method: "PUT",
      body: JSON.stringify({ description: "Updated test description" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updatePlace(req, { params: { id: testPlaceId } });
    expect(res.status).toBe(200);
    const place = await res.json();

    expect(place.description).toBe("Updated test description");
  });

  // ✅ Delete a place
  it("should delete a place", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/places/${testPlaceId}`, {
      method: "DELETE",
    });

    const res = await deletePlace(req, { params: { id: testPlaceId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Place deleted successfully");
  });
});
