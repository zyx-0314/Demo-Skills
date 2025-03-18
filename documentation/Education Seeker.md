### REST API Tests Documentation - Education Seeker 

## **API Endpoints and Requirements**

---

### **1. User Account Management**

#### `POST /api/users`

**Description:** Creates a new user.
* **Required:** `email`,  `name`,  `password`,  `group`
* **Response:** `201 Created` with user object

#### `GET /api/users`

**Description:** Fetches all users.
* **Response:** `200 OK` with an array of users

#### `GET /api/users/{id}`

**Description:** Fetches a single user by ID.
* **Required:** `id` (in URL path)
* **Response:** `200 OK` with user object

#### `PUT /api/users/{id}`

**Description:** Updates user details.
* **Required:** `name`,  `group`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/DIYHomes/admin/users`

**Description:** Bans a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### **2. Learning Platform Submission & Management**

#### `POST /api/FoodieTraveler/platforms`

**Description:** Submits a new learning platform for review.  
* **Required:** `name`,     `website`,     `description`,  `submittedBy`  
* **Response:** `201 Created` with platform object  

#### `GET /api/FoodieTraveler/platforms`

**Description:** Fetches all submitted learning platforms.  
* **Response:** `200 OK` with an array of platforms  

#### `GET /api/FoodieTraveler/platforms/{id}`

**Description:** Fetches a single learning platform by ID.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with platform object  

#### `PUT /api/FoodieTraveler/admin/platforms/{id}`

**Description:** Updates platform information (Admin Only).  
* **Required:** `name`,     `website`,  `description`  
* **Response:** `200 OK` with updated platform object  

#### `DELETE /api/FoodieTraveler/admin/platforms/{id}`

**Description:** Deletes a learning platform (Admin Only).  
* **Required:** `id`  
* **Response:** `200 OK` with success message  

---

### **3. Reviews & Ratings**

#### `POST /api/FoodieTraveler/reviews`

**Description:** Submits a personal review and rating for a platform.  
* **Required:** `platformId`,  `userId`,     `rating`,  `comment`  
* **Response:** `201 Created` with review object  

#### `GET /api/FoodieTraveler/reviews`

**Description:** Fetches reviews for a specific learning platform.  
* **Required:** `platformId`  
* **Response:** `200 OK` with an array of reviews  

#### `PUT /api/FoodieTraveler/reviews/{reviewId}`

**Description:** Updates a submitted review.  
* **Required:** `reviewId`,     `rating`,  `comment`  
* **Response:** `200 OK` with updated review object  

#### `DELETE /api/FoodieTraveler/reviews/{reviewId}`

**Description:** Deletes a review.  
* **Required:** `reviewId`  
* **Response:** `200 OK` with success message  

---

### **4. Ranking & Confirmation**

#### `GET /api/FoodieTraveler/platforms/leaderboard`

**Description:** Retrieves the ranking of top-rated learning platforms.  
* **Response:** `200 OK` with a list of ranked platforms  

#### `POST /api/FoodieTraveler/admin/platforms/{id}/validate`

**Description:** Confirms and validates a submitted learning platform (Admin Only).  
* **Required:** `id`  
* **Response:** `200 OK` with validation status  

#### `POST /api/FoodieTraveler/admin/reviews/{id}/validate`

**Description:** Confirms and validates a submitted review (Admin Only).  
* **Required:** `id`  
* **Response:** `200 OK` with validation status  
