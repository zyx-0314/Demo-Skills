### **REST API Tests Documentation - Elderly Care Companion**  

## **API Endpoints and Requirements**  

---

### **1. User Account Management**  

#### `POST /api/ElderlyCareCompanion/users`

**Description:** Creates a new user.
* **Required:** `email`,              `name`,              `password`
* **Response:** `201 Created` with user object

#### `GET /api/ElderlyCareCompanion/users`

**Description:** Fetches all users.
* **Response:** `200 OK` with an array of users

#### `GET /api/ElderlyCareCompanion/users/login/{email}`

**Description:** Fetches a single user by Email.
* **Required:** `email` (in URL path)
* **Response:** `200 OK` with user object

#### `PUT /api/ElderlyCareCompanion/users/{id}`

**Description:** Updates user details.
* **Required:** `name`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/ElderlyCareCompanion/users/{id}`

**Description:** Delete a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### **2. Appointment & Medication Reminder Management**  

#### `POST /api/ElderlyCareCompanion/appointments`

**Description:** Creates a new health appointment or medication reminder.  
* **Required:** `userId`,  `type` (`appointment` or `medication`),                `title`,                `dateTime`,  `location` (for appointments),  `medicationDetails` (for medication)  
* **Response:** `201 Created` with appointment or medication reminder object  

#### `GET /api/ElderlyCareCompanion/users/appointments/{userId}`

**Description:** Fetches all scheduled appointments and medication reminders for a user.  
* **Required:** `userId`  
* **Response:** `200 OK` with an array of appointments and reminders  

#### `GET /api/ElderlyCareCompanion/appointments/{id}`

**Description:** Fetches details of a single appointment or medication reminder.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with appointment or medication reminder object  

#### `PUT /api/ElderlyCareCompanion/appointments/{id}`

**Description:** Updates an appointment or medication reminder.  
* **Required:** `type`,                `title`,                `dateTime`,  `location` (for appointments),  `medicationDetails` (for medication)  
* **Response:** `200 OK` with updated object  

#### `DELETE /api/ElderlyCareCompanion/appointments/{id}`

**Description:** Deletes an appointment or medication reminder.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  

---

### **3. Clinics & Stores Listing**  

#### `GET /api/ElderlyCareCompanion/clinics`

**Description:** Fetches a list of medical clinics.  
* **Response:** `200 OK` with an array of clinics  

#### `GET /api/ElderlyCareCompanion/stores`

**Description:** Fetches a list of pharmacies or medical supply stores.  
* **Response:** `200 OK` with an array of stores  

---

### **4. Personal Health Records Management**  

#### `POST /api/ElderlyCareCompanion/records`

**Description:** Adds a personal health record.  
* **Required:** `userId`,  `recordType` (`medicalHistory`,                `prescriptions`,                `labResults`),                `details`,  `date`  
* **Response:** `201 Created` with health record object  

#### `GET /api/ElderlyCareCompanion/records/{id}`

**Description:** Fetches details of a personal health record.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with health record object  

#### `PUT /api/ElderlyCareCompanion/records/{id}`

**Description:** Updates a personal health record.  
* **Required:** `recordType`,                `details`,  `date`  
* **Response:** `200 OK` with updated health record object  

#### `DELETE /api/ElderlyCareCompanion/records/{id}`

**Description:** Deletes a personal health record.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  
