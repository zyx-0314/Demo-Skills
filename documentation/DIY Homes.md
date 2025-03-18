# REST API Tests Documentation

## API Endpoints and Requirements

### 1️⃣ User Authentication & Management

#### `POST /api/DIYHomes/users`

**Description:** Creates a new user.
* **Required:**  

```json
{
  "email": "user@example.com", 
  "name": "John Doe", 
  "password": "securepassword"
}
```

* **Response:**  

```json
{
  "id": "uuid", 
  "email": "user@example.com", 
  "name": "John Doe", 
  "createdAt": "2024-03-19T12:00:00.000Z"
}
```

#### `POST /api/DIYHomes/users/login`

**Description:** Login.
* **Required:**  

```json
{
  "email": "user@example.com", 
  "password": "securepassword"
}
```

* **Response:**  

> **Success**

```json
{
  "message": "Login successful", 
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

> **Failed**

```json
{ "error": "Invalid credentials" }
```

#### `GET /api/DIYHomes/users`

**Description:** Fetches all users.
* **Response:**  

```json
[
  { "id": "uuid", "email": "user@example.com", "name": "John Doe" }, 
  { "id": "uuid", "email": "another@example.com", "name": "Jane Doe" }
]
```

#### `GET /api/DIYHomes/users/{id}`

**Description:** Fetches a single user by ID.
* **Required:**   `/api/DIYHomes/users/uuid`

* **Response:**  

```json
{
  "id": "uuid", 
  "email": "user@example.com", 
  "name": "John Doe"
}
```

#### `PUT /api/DIYHomes/users/{id}`

**Description:** Updates user details.
* **Required:**   `/api/DIYHomes/users/uuid`

```json
{ "name": "Updated Name" }
```

* **Response:**  

```json
{
  "id": "uuid", 
  "email": "user@example.com", 
  "name": "Updated Name"
}
```

#### `DELETE /api/DIYHomes/users/{id}`

**Description:** Delete a user.
* **Required:**   `/api/DIYHomes/users/uuid`

* **Response:**  

```json
{ "message": "User deleted successfully" }
```

---

### 2️⃣ DIY Project Posting

#### `POST /api/DIYHomes/posts`

**Description:** Creates a new DIY post.
* **Required:**  

```json
{
  "title": "DIY Wooden Table",
  "content": "Step by step guide on making a wooden table.",
  "category": "Woodworking",
  "userId": "uuid"
}
```

* **Response:**  

```json
{
  "id": "uuid",
  "title": "DIY Wooden Table",
  "content": "Step by step guide on making a wooden table.",
  "category": "Woodworking",
  "userId": "uuid",
  "createdAt": "2024-03-19T12:00:00.000Z"
}
```

#### `GET /api/DIYHomes/posts`

**Description:** Fetches all DIY posts.
* **Response:**  

```json
[
  {
    "id": "uuid",
    "title": "DIY Wooden Table",
    "content": "Step by step guide on making a wooden table.",
    "category": "Woodworking",
    "userId": "uuid",
    "createdAt": "2024-03-19T12:00:00.000Z"
  }
]
```

#### `GET /api/DIYHomes/posts/{post_id}`

**Description:** Fetches a single post by ID.
* **Required:**   `post_id` (in URL path)
* **Response:**  

```json
{
  "id": "uuid",
  "title": "DIY Wooden Table",
  "content": "Step by step guide on making a wooden table.",
  "category": "Woodworking",
  "userId": "uuid",
  "createdAt": "2024-03-19T12:00:00.000Z"
}
```

#### `PUT /api/DIYHomes/posts/{post_id}`

**Description:** Updates a post.
* **Required:**  

```json
{
  "title": "Updated DIY Wooden Table",
  "content": "Updated guide on making a wooden table."
}
```

* **Response:**  

```json
{
  "id": "uuid",
  "title": "Updated DIY Wooden Table",
  "content": "Updated guide on making a wooden table.",
  "updatedAt": "2024-03-19T13:00:00.000Z"
}
```

#### `DELETE /api/DIYHomes/posts/{post_id}`

**Description:** Deletes a post.
* **Required:**   `post_id`

* **Response:**  

```json
{ "message": "Post deleted successfully" }
```

---

### 3️⃣ Reviews & Ratings

#### `POST /api/DIYHomes/posts/{post_id}/reviews`

**Description:** Adds a review to a post.
* **Required:**   `post_id` , `userId` , `rating` , `comment`

* **Response:**   `201 Created` with review object

#### `GET /api/DIYHomes/posts/{post_id}/reviews`

**Description:** Fetches all reviews for a post.
* **Required:**   `post_id`

* **Response:**   `200 OK` with an array of reviews

#### `PUT /api/DIYHomes/reviews/{review_id}`

**Description:** Updates a review.
* **Required:**   `review_id` , `rating` , `comment`

* **Response:**   `200 OK` with updated review object

#### `DELETE /api/DIYHomes/reviews/{review_id}`

**Description:** Deletes a review.
* **Required:**   `review_id`

* **Response:**   `200 OK` with success message

---

### 4️⃣ Likes & Bookmarks

#### `POST /api/DIYHomes/posts/{post_id}/like`

**Description:** Likes a post.
* **Required:**   `post_id` , `userId`

* **Response:**   `201 Created` with like object

#### `DELETE /api/DIYHomes/posts/{post_id}/like`

**Description:** Removes like from a post.
* **Required:**   `post_id` , `userId`

* **Response:**   `200 OK` with success message

#### `POST /api/DIYHomes/posts/{post_id}/bookmark`

**Description:** Bookmarks a post.
* **Required:**   `post_id` , `userId`

* **Response:**   `201 Created` with bookmark object

#### `DELETE /api/DIYHomes/posts/{post_id}/bookmark`

**Description:** Removes a bookmark.
* **Required:**   `post_id` , `userId`

* **Response:**   `200 OK` with success message

---

### 5️⃣ Admin Controls

#### `GET /api/DIYHomes/admin/users`

**Description:** Fetches all users (Admin only).
* **Response:**   `200 OK` with an array of users

#### `GET /api/DIYHomes/admin/posts`

**Description:** Fetches all posts (Admin only).
* **Response:**   `200 OK` with an array of posts

#### `GET /api/DIYHomes/admin/reports`

**Description:** Fetches all reports.
* **Response:**   `200 OK` with an array of reports

#### `DELETE /api/DIYHomes/admin/reports`

**Description:** Deletes a report.
* **Required:**   `reportId`

* **Response:**   `200 OK` with success message

#### `DELETE /api/DIYHomes/admin/posts`

**Description:** Deletes a post.
* **Required:**   `post_id`

* **Response:**   `200 OK` with success message

#### `DELETE /api/DIYHomes/admin/users`

**Description:** Bans a user.
* **Required:**   `userId`

* **Response:**   `200 OK` with success message

---

### 6️⃣ User Reports

#### `POST /api/DIYHomes/reports`

**Description:** Reports a post.
* **Required:**   `post_id` , `userId` , `reason`

* **Response:**   `201 Created` with report object

#### `GET /api/DIYHomes/reports`

**Description:** Fetches all reports.
* **Response:**   `200 OK` with an array of reports

#### `DELETE /api/DIYHomes/reports/{report_id}`

**Description:** Deletes a report.
* **Required:**   `report_id`

* **Response:**   `200 OK` with success message

---
