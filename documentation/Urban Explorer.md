# REST API Tests Documentation

## API Endpoints and Requirements

### 1️⃣ User Authentication & Management

#### `POST /api/UrbanExplorer/users`

**Description:** Creates a new user.
* **Required:** `email`,        `name`,        `password`
* **Response:** `201 Created` with user object

#### `GET /api/UrbanExplorer/users`

**Description:** Fetches all users.
* **Response:** `200 OK` with an array of users

#### `GET /api/UrbanExplorer/users/{id}`

**Description:** Fetches a single user by ID.
* **Required:** `id` (in URL path)
* **Response:** `200 OK` with user object

#### `PUT /api/UrbanExplorer/users/{id}`

**Description:** Updates user details.
* **Required:** `name`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/UrbanExplorer/users/{id}`

**Description:** Bans a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### 2️⃣ Place Registration & Management

* **Register a Place** → `POST /api/UrbanExplorer/places`
  + **Required:** `name`,    `category`,    `location`,    `description`,    `ownerId`
  + **Response:** `201 Created` with place object

* **Get All Places** → `GET /api/UrbanExplorer/places`
  + **Response:** `200 OK` with an array of places

* **Get Single Place** → `GET /api/UrbanExplorer/places/{id}`
  + **Required:** `id` (in URL path)
  + **Response:** `200 OK` with place object

* **Update Place Info** → `PUT /api/UrbanExplorer/places/{id}`
  + **Required:** `name`,    `category`,    `description`
  + **Response:** `200 OK` with updated place object

* **Delete Place (Admin or Owner Only)** → `DELETE /api/UrbanExplorer/places/{id}`
  + **Required:** `id`
  + **Response:** `200 OK` with success message

---

### 3️⃣ Place & User Validation

* **Validate Place (Admin Only)** → `POST /api/UrbanExplorer/admin/places/{id}/validate`
  + **Required:** `id`
  + **Response:** `200 OK` with validation status

* **Report a Place (User)** → `POST /api/UrbanExplorer/reports`
  + **Required:** `place_id`,  `userId`,    `reason`
  + **Response:** `201 Created` with report object

* **Get Reports (Admin Only)** → `GET /api/UrbanExplorer/admin/reports`
  + **Response:** `200 OK` with an array of reports

* **Delete Report (Admin Only)** → `DELETE /api/UrbanExplorer/admin/reports/{id}`
  + **Required:** `report_id`
  + **Response:** `200 OK` with success message

---

### 4️⃣ Reviews & Ratings

* **Add a Review** → `POST /api/UrbanExplorer/places/{place_id}/reviews`
  + **Required:** `place_id`,  `userId`,    `rating`,    `comment`
  + **Response:** `201 Created` with review object

* **Get Reviews for a Place** → `GET /api/UrbanExplorer/places/{place_id}/reviews`
  + **Required:** `place_id`
  + **Response:** `200 OK` with an array of reviews

* **Update a Review** → `PUT /api/UrbanExplorer/reviews/{review_id}`
  + **Required:** `review_id`,    `rating`,    `comment`
  + **Response:** `200 OK` with updated review object

* **Delete a Review** → `DELETE /api/UrbanExplorer/reviews/{review_id}`
  + **Required:** `review_id`
  + **Response:** `200 OK` with success message

---

### 5️⃣ Ranking & Community Engagement

* **Like a Place** → `POST /api/UrbanExplorer/places/{place_id}/like`
  + **Required:** `place_id`,  `userId`
  + **Response:** `201 Created` with like object

* **Unlike a Place** → `DELETE /api/UrbanExplorer/places/{place_id}/like`
  + **Required:** `place_id`,  `userId`
  + **Response:** `200 OK` with success message

* **Bookmark a Place** → `POST /api/UrbanExplorer/places/{place_id}/bookmark`
  + **Required:** `place_id`,  `userId`
  + **Response:** `201 Created` with bookmark object

* **Remove Bookmark** → `DELETE /api/UrbanExplorer/places/{place_id}/bookmark`
  + **Required:** `place_id`,  `userId`
  + **Response:** `200 OK` with success message

* **Leaderboard of Top-Rated Places** → `GET /api/UrbanExplorer/places/leaderboard`
  + **Response:** `200 OK` with a list of top-rated places
