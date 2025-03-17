import { NextRequest } from "next/server";
import { POST as createUser, GET as getUsers } from "@/app/api/users/route";
import { GET as getUserById, PUT as updateUser, DELETE as deleteUser } from "@/app/api/users/[id]/route";

describe("User Management API Tests", () => {
  let testUserId: string;
  const group = "admin";

  // ✅ Create a new user
  it("should create a new user", async () => {
    const req = new NextRequest("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: "test@example.com",
        name: "Test User",
        password: "password123",
        group: group,
      }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await createUser(req);
    expect(res.status).toBe(201);
    const user = await res.json();
    testUserId = user.id;
    expect(user.email).toBe("test@example.com");
    expect(user.group).toBe(group);
  });

  // ✅ Fetch all users
  it("should fetch all users", async () => {
    const res = await getUsers();
    expect(res.status).toBe(200);
    const users = await res.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
  });

  // ✅ Fetch a user by ID
  it("should fetch a single user by ID", async () => {
    const req = new NextRequest(`http://localhost:3000/api/users/${testUserId}`);
    const res = await getUserById(req, { params: { id: testUserId } });

    expect(res.status).toBe(200);
    const user = await res.json();
    expect(user.id).toBe(testUserId);
  });

  // ✅ Update user details
  it("should update a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/users/${testUserId}`, {
      method: "PUT",
      body: JSON.stringify({ name: "Updated User", group: "member" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await updateUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const user = await res.json();
    expect(user.name).toBe("Updated User");
    expect(user.group).toBe("member");
  });

  // ✅ Delete user
  it("should delete a user", async () => {
    const req = new NextRequest(`http://localhost:3000/api/users/${testUserId}`, {
      method: "DELETE",
    });

    const res = await deleteUser(req, { params: { id: testUserId } });
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe("User deleted successfully");
  });
});
