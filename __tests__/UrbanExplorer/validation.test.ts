import { POST as validatePlace } from "@/app/api/UrbanExplorer/admin/places/[id]/validate/route";
import { POST as reportPlace, GET as getReports } from "@/app/api/UrbanExplorer/reports/route";
import { POST as createUser } from "@/app/api/users/route"; // ✅ Import User API\
import { POST as createPlace } from "@/app/api/UrbanExplorer/places/route";
import { NextRequest } from "next/server";

describe("UrbanExplorer - Place & User Validation API Tests", () => {
  let testPlaceId: string;
  let testUserId: string;

  beforeAll(async () => {
    // ✅ Ensure test user exists
    const userRes = await createUser(new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ email: "validation@example.com", name: "Validation User", password: "test123", group: "admin" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }));
    const user = await userRes.json();
    testUserId = user.id;

    // ✅ Ensure test place is created and stored in DB
    const placeRes = await createPlace(new NextRequest("http://localhost:3000/api/UrbanExplorer/places", {
      method: "POST",
      body: JSON.stringify({
        name: "Place Validation",
        category: "Park",
        location: "Test Area",
        description: "Validation test place",
        ownerId: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }));

    expect(placeRes.status).toBe(201); // ✅ Ensure place is created successfully
    const place = await placeRes.json();
    testPlaceId = place.id; // ✅ Store the created place ID
  });

  // ✅ Validate a place (Admin only)
  it("should validate a place", async () => {
    const req = new NextRequest(`http://localhost:3000/api/UrbanExplorer/admin/places/${testPlaceId}/validate`, {
      method: "POST",
      body: JSON.stringify({ id: testPlaceId }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const res = await validatePlace(req);
    console.info("Report created:", res);

    expect(res.status).toBe(200);
    const place = await res.json();
    expect(place.validated).toBe(true);
  });

  // ✅ Report a place
  it("should report a place", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/reports", {
      method: "POST",
      body: JSON.stringify({ placeId: testPlaceId, userId: testUserId, reason: "Inappropriate content" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await reportPlace(req);
    console.info("Report created:", res);
    expect(res.status).toBe(201); // ✅ Ensure successful report submission
  });

  // ✅ Fetch reports (Admin only)
  it("should fetch all reports", async () => {
    const res = await getReports();
    expect(res.status).toBe(200);
    const reports = await res.json();
    expect(Array.isArray(reports)).toBeTruthy();
  });
});
