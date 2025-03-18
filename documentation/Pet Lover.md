### REST API Tests Documentation - Pet Lover

## **API Endpoints and Requirements**

---

### **1. User Account Management**

#### `POST /api/PetLover/users`

**Description:** Creates a new user.
* **Required:** `email`,      `name`,      `password`
* **Response:** `201 Created` with user object

#### `GET /api/PetLover/users`

**Description:** Fetches all users.
* **Response:** `200 OK` with an array of users

#### `GET /api/PetLover/users/{id}`

**Description:** Fetches a single user by ID.
* **Required:** `id` (in URL path)
* **Response:** `200 OK` with user object

#### `PUT /api/PetLover/users/{id}`

**Description:** Updates user details.
* **Required:** `name`
* **Response:** `200 OK` with updated user object

#### `DELETE /api/PetLover/users/{id}`

**Description:** Bans a user.
* **Required:** `userId`
* **Response:** `200 OK` with success message

---

### **2. Appointment Management**

#### `POST /api/PetLover/appointments`

**Description:** Creates a new pet care appointment.  
* **Required:** `userId`,       `appointmentType`,       `dateTime`,  `location`  
* **Response:** `201 Created` with appointment object  

#### `GET /api/PetLover/appointments`

**Description:** Fetches all appointments for a user.  
* **Required:** `userId`  
* **Response:** `200 OK` with an array of appointments  

#### `GET /api/PetLover/appointments/{id}`

**Description:** Fetches details of a single appointment.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with appointment object  

#### `PUT /api/PetLover/appointments/{id}`

**Description:** Updates an appointment.  
* **Required:** `appointmentType`,       `dateTime`,  `location`  
* **Response:** `200 OK` with updated appointment object  

#### `DELETE /api/PetLover/appointments/{id}`

**Description:** Deletes an appointment.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  

---

### **3. Vaccination, Clinics, and Stores Listing**

#### `POST /api/PetLover/vaccinations`

**Description:** Submits a new vaccination record.  
* **Required:** `petId`,       `vaccineName`,       `dateAdministered`,  `nextDueDate`  
* **Response:** `201 Created` with vaccination object  

#### `GET /api/PetLover/vaccinations`

**Description:** Fetches all vaccinations for a pet.  
* **Required:** `petId`  
* **Response:** `200 OK` with an array of vaccinations  

#### `GET /api/PetLover/clinics`

**Description:** Fetches a list of pet clinics.  
* **Response:** `200 OK` with an array of clinics  

#### `GET /api/PetLover/stores`

**Description:** Fetches a list of pet stores.  
* **Response:** `200 OK` with an array of stores  

---

### **4. Personal Pet Records Management**

#### `POST /api/PetLover/pets`

**Description:** Adds a pet's personal record.  
* **Required:** `userId`,       `petName`,       `species`,       `breed`,       `age`,  `medicalHistory`  
* **Response:** `201 Created` with pet object  

#### `GET /api/PetLover/pets/{id}`

**Description:** Fetches pet details.  
* **Required:** `id` (in URL path)  
* **Response:** `200 OK` with pet object  

#### `PUT /api/PetLover/pets/{id}`

**Description:** Updates pet details.  
* **Required:** `petName`,       `species`,       `breed`,       `age`,  `medicalHistory`  
* **Response:** `200 OK` with updated pet object  

#### `DELETE /api/PetLover/pets/{id}`

**Description:** Deletes pet record.  
* **Required:** `id`  
* **Response:** `200 OK` with success message  
