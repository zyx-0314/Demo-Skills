import { NextRequest } from "next/server";
import { POST as likeFood, DELETE as unlikeFood } from "@/app/api/FoodieTraveler/foods/[id]/like/route";
import { GET as getLeaderboard } from "@/app/api/FoodieTraveler/foods/leaderboard/route";
import { POST as createFood } from "@/app/api/FoodieTraveler/foods/route";
import { POST as createUser } from "@/app/api/users/route"; // ✅ Import User API

describe("Foodie Community Engagement API Tests", () => {
  let testFoodId: string;
  let testUserId: string;

  const testEmail = "testcommunity@example.com";

  // ✅ Create a test user before running the tests
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: testEmail,
        name: "Test Community User",
        password: "password123",
        group: "member",
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    const user = await res.json();
    testUserId = user.id; // ✅ Store valid user ID
  });

  // ✅ Create a new food item before liking
  beforeAll(async () => {
    const req = new NextRequest("http://localhost:3000/api/FoodieTraveler/foods", {
      method: "POST",
      body: JSON.stringify({
        name: "Tacos",
        cuisine: "Mexican",
        origin: "Mexico",
        description: "Spicy beef tacos",
        submittedBy: testUserId, // ✅ Use valid user ID
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createFood(req);
    const food = await res.json();
    testFoodId = food.id;
  });

  // ✅ Like a food item
  it("should like a food item", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/foods/${testFoodId}/like`, {
      method: "POST",
      body: JSON.stringify({
        userId: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await likeFood(req, { params: { id: testFoodId } });
    expect(res.status).toBe(201);
    const like = await res.json();
    expect(like.foodId).toBe(testFoodId);
    expect(like.userId).toBe(testUserId);
  });

  // ✅ Unlike a food item
  it("should unlike a food item", async () => {
    const req = new NextRequest(`http://localhost:3000/api/FoodieTraveler/foods/${testFoodId}/like`, {
      method: "DELETE",
      body: JSON.stringify({
        userId: testUserId,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await unlikeFood(req, { params: { id: testFoodId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("Food unliked successfully");
  });

  // ✅ Fetch leaderboard of top-rated foods
  it("should fetch the leaderboard of top-rated foods", async () => {
    const res = await getLeaderboard();
    expect(res.status).toBe(200);
    const leaderboard = await res.json();
    expect(Array.isArray(leaderboard)).toBeTruthy();
  });
});
