import { POST as bookmarkPlace, DELETE as removeBookmark } from "@/app/api/UrbanExplorer/places/[id]/bookmark/route";
import { NextRequest } from "next/server";

describe("UrbanExplorer Bookmarks API Tests", () => {
  it("should bookmark a place", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/places/1/bookmark", {
      method: "POST",
      body: JSON.stringify({ userId: "1" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await bookmarkPlace(req, { params: { place_id: "1" } });
    expect(res.status).toBe(201);
  });

  it("should remove a bookmark", async () => {
    const req = new NextRequest("http://localhost:3000/api/UrbanExplorer/places/1/bookmark", {
      method: "DELETE",
      body: JSON.stringify({ userId: "1" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    const res = await removeBookmark(req, { params: { place_id: "1" } });
    expect(res.status).toBe(200);
  });
});
