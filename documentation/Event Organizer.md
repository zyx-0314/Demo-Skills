### **REST API Tests Documentation - Event Organizer (Pikipek TW22) (Giratina TB22)**  

## **API Endpoints and Requirements**  

---

### **1. User Account Management**  

#### `POST /api/EventOrganizer/users`

**Description:** Creates a new user.
* **Required:** `email`,     `name`,     `password`
* **Response:** `201 Created` with user object

#### `GET /api/EventOrganizer/users`

**Description:** Fetches all users.
* **Response:** `200 OK` with an array of users

#### `GET /api/EventOrganizer/users/{id}`

**Description:** Fetches a single user by ID.
* **Required:** `id` (in URL path)
* **Response:** `200 OK` with user object

#### `PUT /api/EventOrganizer/users/{id}`

**Description:** Updates user details.
* **Required:** `name`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/EventOrganizer/users/{id}`

**Description:** Bans a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### **2. Task Management**  

#### `POST /api/EventOrganizer/tasks`

**Description:** Creates a new event task.  
* **Required:** `userId`,      `title`,      `description`,      `dueDate`,  `status`  
* **Response:** `201 Created` with task object  

#### `GET /api/EventOrganizer/tasks`

**Description:** Fetches all tasks for a user.  
* **Required:** `userId`  
* **Response:** `200 OK` with an array of tasks  

#### `GET /api/EventOrganizer/tasks/{id}`

**Description:** Fetches details of a single task.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with task object  

#### `PUT /api/EventOrganizer/tasks/{id}`

**Description:** Updates a task.  
* **Required:** `title`,      `description`,      `dueDate`,  `status`  
* **Response:** `200 OK` with updated task object  

#### `DELETE /api/EventOrganizer/tasks/{id}`

**Description:** Deletes a task.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  

---

### **3. Guest Tracking**  

#### `POST /api/EventOrganizer/guests`

**Description:** Adds a guest to an event.  
* **Required:** `eventId`,     `name`,  `email`,      `phone`,  `status` (e.g.,      `confirmed`,      `pending`,      `declined`)  
* **Response:** `201 Created` with guest object  

#### `GET /api/EventOrganizer/guests`

**Description:** Fetches all guests for a specific event.  
* **Required:** `eventId`  
* **Response:** `200 OK` with an array of guests  

#### `PUT /api/EventOrganizer/guests/{id}`

**Description:** Updates guest details or status.  
* **Required:** `name`,  `email`,      `phone`,  `status`  
* **Response:** `200 OK` with updated guest object  

#### `DELETE /api/EventOrganizer/guests/{id}`

**Description:** Removes a guest from an event.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  

---

### **4. Event Venue & Service Provider Submission**  

#### `POST /api/EventOrganizer/venues`

**Description:** Submits a new event venue for listing.  
* **Required:** `name`,      `location`,      `capacity`,      `amenities`,  `submittedBy`  
* **Response:** `201 Created` with venue object  

#### `GET /api/EventOrganizer/venues`

**Description:** Fetches all listed event venues.  
* **Response:** `200 OK` with an array of venues  

#### `GET /api/EventOrganizer/venues/{id}`

**Description:** Fetches details of a single venue.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with venue object  

#### `POST /api/EventOrganizer/providers`

**Description:** Submits a new event service provider (e.g., catering, photography, decorations).  
* **Required:** `name`,      `serviceType`,      `contactInfo`,  `submittedBy`  
* **Response:** `201 Created` with provider object  

#### `GET /api/EventOrganizer/providers`

**Description:** Fetches all listed event service providers.  
* **Response:** `200 OK` with an array of providers  

#### `GET /api/EventOrganizer/providers/{id}`

**Description:** Fetches details of a single provider.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with provider object  
