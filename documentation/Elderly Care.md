### **REST API Tests Documentation - Elderly Care Companion**  

## **API Endpoints and Requirements**  

---

### **1. User Account Management**  

#### `POST /api/users`

**Description:** Creates a new user.
* **Required:** `email`,   `name`,   `password`,   `group`
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
* **Required:** `name`,   `group`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/DIYHomes/admin/users`

**Description:** Bans a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### **2. Appointment & Medication Reminder Management**  

#### `POST /api/ElderlyCare/appointments`

**Description:** Creates a new health appointment or medication reminder.  
* **Required:** `userId`,  `type` (`appointment` or `medication`),     `title`,     `dateTime`,  `location` (for appointments),  `medicationDetails` (for medication)  
* **Response:** `201 Created` with appointment or medication reminder object  

#### `GET /api/ElderlyCare/appointments`

**Description:** Fetches all scheduled appointments and medication reminders for a user.  
* **Required:** `userId`  
* **Response:** `200 OK` with an array of appointments and reminders  

#### `GET /api/ElderlyCare/appointments/{id}`

**Description:** Fetches details of a single appointment or medication reminder.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with appointment or medication reminder object  

#### `PUT /api/ElderlyCare/appointments/{id}`

**Description:** Updates an appointment or medication reminder.  
* **Required:** `type`,     `title`,     `dateTime`,  `location` (for appointments),  `medicationDetails` (for medication)  
* **Response:** `200 OK` with updated object  

#### `DELETE /api/ElderlyCare/appointments/{id}`

**Description:** Deletes an appointment or medication reminder.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  

---

### **3. Clinics & Stores Listing**  

#### `GET /api/ElderlyCare/clinics`

**Description:** Fetches a list of medical clinics.  
* **Response:** `200 OK` with an array of clinics  

#### `GET /api/ElderlyCare/stores`

**Description:** Fetches a list of pharmacies or medical supply stores.  
* **Response:** `200 OK` with an array of stores  

---

### **4. Personal Health Records Management**  

#### `POST /api/ElderlyCare/records`

**Description:** Adds a personal health record.  
* **Required:** `userId`,  `recordType` (`medicalHistory`,     `prescriptions`,     `labResults`),     `details`,  `date`  
* **Response:** `201 Created` with health record object  

#### `GET /api/ElderlyCare/records/{id}`

**Description:** Fetches details of a personal health record.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with health record object  

#### `PUT /api/ElderlyCare/records/{id}`

**Description:** Updates a personal health record.  
* **Required:** `recordType`,     `details`,  `date`  
* **Response:** `200 OK` with updated health record object  

#### `DELETE /api/ElderlyCare/records/{id}`

**Description:** Deletes a personal health record.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  
