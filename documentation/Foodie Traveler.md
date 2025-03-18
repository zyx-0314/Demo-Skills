# REST API Tests Documentation - Foodie Traveler

## API Endpoints and Requirements

### 1. User Authentication & Management

#### `POST /api/FoodieTraveler/users`

**Description:** Creates a new user.
* **Required:** `email`,    `name`,    `password`
* **Response:** `201 Created` with user object

#### `GET /api/FoodieTraveler/users`

**Description:** Fetches all users.
* **Response:** `200 OK` with an array of users

#### `GET /api/FoodieTraveler/users/{id}`

**Description:** Fetches a single user by ID.
* **Required:** `id` (in URL path)
* **Response:** `200 OK` with user object

#### `PUT /api/FoodieTraveler/users/{id}`

**Description:** Updates user details.
* **Required:** `name`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/FoodieTraveler/users/{id}`

**Description:** Bans a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### 2. Food Registration & Management

* **Submit a Food Evaluation** → `POST /api/FoodieTraveler/foods`
  + **Required:** `name`,    `cuisine`,    `origin`,    `description`,    `submittedBy`
  + **Response:** `201 Created` with food object

* **Submit Where to Find a Dish** → `POST /api/FoodieTraveler/foods/{id}/locations`
  + **Required:** `foodId`,    `locationName`,    `address`,    `submittedBy`
  + **Response:** `201 Created` with location object

* **Get All Foods** → `GET /api/FoodieTraveler/foods`
  + **Response:** `200 OK` with an array of foods

* **Get Single Food** → `GET /api/FoodieTraveler/foods/{id}`
  + **Required:** `id` (in URL path)
  + **Response:** `200 OK` with food object

* **Update Food Info (Admin Only)** → `PUT /api/FoodieTraveler/admin/foods/{id}`
  + **Required:** `name`,    `cuisine`,    `description`
  + **Response:** `200 OK` with updated food object

* **Delete Food (Admin Only)** → `DELETE /api/FoodieTraveler/admin/foods/{id}`
  + **Required:** `id`
  + **Response:** `200 OK` with success message

---

### 3. Food & Review Validation

* **Confirm Food Submission (Admin Only)** → `POST /api/FoodieTraveler/admin/foods/{id}/validate`
  + **Required:** `id`
  + **Response:** `200 OK` with validation status

* **Confirm Review Submission (Admin Only)** → `POST /api/FoodieTraveler/admin/reviews/{id}/validate`
  + **Required:** `id`
  + **Response:** `200 OK` with validation status

---

### 4. Reviews & Ratings

* **Submit a Review & Rating** → `POST /api/FoodieTraveler/reviews`
  + **Required:** `foodId`,  `userId`,    `rating`,    `comment`
  + **Response:** `201 Created` with review object

* **Get Reviews for a Food Item** → `GET /api/FoodieTraveler/reviews`
  + **Required:** `foodId`
  + **Response:** `200 OK` with an array of reviews

* **Update a Review** → `PUT /api/FoodieTraveler/reviews/{reviewId}`
  + **Required:** `reviewId`,    `rating`,    `comment`
  + **Response:** `200 OK` with updated review object

* **Delete a Review** → `DELETE /api/FoodieTraveler/reviews/{reviewId}`
  + **Required:** `reviewId`
  + **Response:** `200 OK` with success message

---

### 5. Foodie Community Engagement

* **Like a Food Item** → `POST /api/FoodieTraveler/foods/{foodId}/like`
  + **Required:** `foodId`,  `userId`
  + **Response:** `201 Created` with like object

* **Unlike a Food Item** → `DELETE /api/FoodieTraveler/foods/{foodId}/like`
  + **Required:** `foodId`,  `userId`
  + **Response:** `200 OK` with success message

* **Leaderboard of Top-Rated Foods** → `GET /api/FoodieTraveler/foods/leaderboard`
  + **Response:** `200 OK` with a list of top-rated foods
