import { POST as createStore, GET as getStores } from "@/app/api/ElderlyCareCompanion/store/route";
import { GET as getStoreById, PUT as updateStore, DELETE as deleteStore } from "@/app/api/ElderlyCareCompanion/store/[id]/route";
import { NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();
let testStoreId: string;

describe("Elderly Care Companion - Stores API Tests", () => {

  // ✅ Cleanup before running tests
  beforeAll(async () => {
    await prisma.elderlyCareCompanionStore.deleteMany();
  });

  // =========================
  // ✅ Create Methods (C)
  // =========================
  it("should create a new store", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/store", {
      method: "POST",
      body: JSON.stringify({
        name: "Healthy Life Pharmacy",
        address: "456 Wellness Ave",
        phone: "+9876543210",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createStore(req);
    expect(res.status).toBe(201);
    const store = await res.json();

    expect(store).toHaveProperty("id");
    expect(store.name).toBe("Healthy Life Pharmacy");
    testStoreId = store.id;
  });

  // =========================
  // ✅ Read Methods (R)
  // =========================
  it("should fetch all stores", async () => {
    const req = new NextRequest("http://localhost:3000/api/ElderlyCareCompanion/store");
    const res = await getStores(req);

    expect(res.status).toBe(200);
    const stores = await res.json();

    expect(Array.isArray(stores)).toBeTruthy();
    expect(stores.length).toBeGreaterThan(0);
  });

  it("should fetch a single store by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/store/${testStoreId}`);
    const res = await getStoreById(req, { params: { id: testStoreId } });

    expect(res.status).toBe(200);
    const store = await res.json();
    expect(store.id).toBe(testStoreId);
    expect(store.name).toBe("Healthy Life Pharmacy");
  });

  // =========================
  // ✅ Update Methods (U)
  // =========================
  it("should update a store", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/store/${testStoreId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Healthy Life Pharmacy" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateStore(req, { params: { id: testStoreId } });
    expect(res.status).toBe(200);
    const store = await res.json();

    expect(store.name).toBe("Updated Healthy Life Pharmacy");
  });

  // =========================
  // ✅ Delete Methods (D)
  // =========================
  it("should delete a store", async () => {
    const req = new NextRequest(`http://localhost:3000/api/ElderlyCareCompanion/store/${testStoreId}`, {
      method: "DELETE",
    });

    const res = await deleteStore(req, { params: { id: testStoreId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Store deleted successfully");
  });

  // ✅ Cleanup remaining test data after tests
  afterAll(async () => {
    await prisma.elderlyCareCompanionStore.deleteMany();
    await prisma.$disconnect();
  });

});
