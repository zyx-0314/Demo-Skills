import { NextRequest } from "next/server";
import { POST as createFood, GET as getFoods } from "@/app/api/FoodieTraveler/foods/route";
import { GET as getFoodById } from "@/app/api/FoodieTraveler/foods/[id]/route";
import { PUT as updateFood, DELETE as deleteFood } from "@/app/api/FoodieTraveler/admin/foods/[id]/route";
import { POST as submitLocation } from "@/app/api/FoodieTraveler/foods/[id]/locations/route";
import { POST as createUser } from "@/app/api/FoodieTraveler/users/route"; // ✅ Import User API

describe("FoodieTraveler API Tests", () => {
  let testFoodId: string;
  let testUserId: string;

  const testEmail = "testfood@example.com";

  // ✅ Create a test user before running the tests
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

  // ✅ Create a new food item
  it("should create a new food item", async () => {
    const req = new NextRequest("http://localhost:3000/api/FoodieTraveler/foods", {
      method: "POST",
      body: JSON.stringify({
        name: "Pizza",
        cuisine: "Italian",
        origin: "Italy",
        description: "Delicious cheese pizza",
        submittedBy: testUserId, // ✅ Use valid user ID
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createFood(req);
    expect(res.status).toBe(201);
    const food = await res.json();
    testFoodId = food.id;
    expect(food.name).toBe("Pizza");
  });

  // ✅ Fetch all foods
  it("should fetch all food items", async () => {
    const res = await getFoods();
    expect(res.status).toBe(200);
    const foods = await res.json();
    expect(Array.isArray(foods)).toBeTruthy();
    expect(foods.length).toBeGreaterThan(0);
  });

  // ✅ Fetch a food by ID
  it("should fetch a single food item by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/foods/${testFoodId}`);
    const res = await getFoodById(req, { params: { id: testFoodId } });

    expect(res.status).toBe(200);
    const food = await res.json();
    expect(food.id).toBe(testFoodId);
  });

  // ✅ Update food details (Admin Only)
  it("should update a food item", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/foods/${testFoodId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated Pizza", cuisine: "Italian", description: "Tasty pizza with extra cheese" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateFood(req, { params: { id: testFoodId } });
    expect(res.status).toBe(200);
    const food = await res.json();
    expect(food.name).toBe("Updated Pizza");
  });

  // ✅ Submit a location for a food item
  it("should submit a location for a food item", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/foods/${testFoodId}/locations`, {
      method: "POST",
      body: JSON.stringify({
        locationName: "Italian Restaurant",
        address: "123 Main St, Italy",
        submittedBy: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await submitLocation(req, { params: { id: testFoodId } });
    expect(res.status).toBe(201);
    const location = await res.json();
    expect(location.locationName).toBe("Italian Restaurant");
  });

  // ✅ Delete food (Admin Only)
  it("should delete a food item", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/foods/${testFoodId}`, {
      method: "DELETE",
    });

    const res = await deleteFood(req, { params: { id: testFoodId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Food deleted successfully");
  });
});
