# REST API Tests Documentation

## API Endpoints and Requirements

### 1️⃣ User Authentication & Management

#### POST /api/MusicLover/users

**Description:** Registers a new music enthusiast.  
* **Required:** email, name, password  
* **Response:** 201 Created with user object

#### GET /api/MusicLover/users

**Description:** Retrieves all users.  
* **Response:** 200 OK with list of user objects

#### GET /api/MusicLover/users/login/{email}

**Description:** Retrieves a specific user by Email.  
* **Required:** email
* **Response:** 200 OK with user object

#### PUT /api/MusicLover/users/{id}

**Description:** Updates user profile information.  
* **Required:** name  
* **Response:** 200 OK with updated user object

#### DELETE /api/MusicLover/users/{id}

**Description:** Deactivates a user account.  
* **Required:** userId  
* **Response:** 200 OK with confirmation message

---

### 2️⃣ Concert Submission & Management

* **Submit New Concert** → POST /api/MusicLover/concerts  
  + **Required:** title, date, venue, genre, submittedBy  
  + **Response:** 201 Created with concert object

* **Get All Concerts** → GET /api/MusicLover/concerts  
  + **Response:** 200 OK with array of concert objects

* **Get Concert by ID** → GET /api/MusicLover/concerts/{id}  
  + **Required:** id  
  + **Response:** 200 OK with concert details

* **Update Concert Info** → PUT /api/MusicLover/concerts/{id}  
  + **Required:** title, date, venue  
  + **Response:** 200 OK with updated concert info

* **Delete Concert (Admin Only)** → DELETE /api/MusicLover/concerts/{id}  
  + **Required:** id  
  + **Response:** 200 OK with deletion confirmation

---

### 3️⃣ Concert & Review Validation

* **Validate Concert (Admin Only)** → POST /api/MusicLover/admin/concerts/{id}/validate  
  + **Required:** id  
  + **Response:** 200 OK with validation status

* **Submit Concert Review** → POST /api/MusicLover/reviews  
  + **Required:** concertId, userId, rating, comment  
  + **Response:** 201 Created with review object

* **Validate Review (Admin Only)** → POST /api/MusicLover/admin/reviews/{id}/validate  
  + **Required:** id  
  + **Response:** 200 OK with review status

* **Delete Review (Admin Only)** → DELETE /api/MusicLover/admin/reviews/{id}  
  + **Required:** review_id  
  + **Response:** 200 OK with success message

---

### 4️⃣ Reviews & Ratings

* **Get Reviews for a Concert** → GET /api/MusicLover/concerts/{concert_id}/reviews  
  + **Required:** concert_id  
  + **Response:** 200 OK with array of reviews

* **Update a Review** → PUT /api/MusicLover/reviews/{review_id}  
  + **Required:** rating, comment  
  + **Response:** 200 OK with updated review object

* **Delete a Review** → DELETE /api/MusicLover/reviews/{review_id}  
  + **Required:** review_id  
  + **Response:** 200 OK with success message
