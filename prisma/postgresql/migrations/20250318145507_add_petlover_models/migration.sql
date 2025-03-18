-- CreateTable
CREATE TABLE "PetPetLover" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "petName" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "medicalHistory" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PetPetLover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentPetLover" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "appointmentType" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AppointmentPetLover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaccinationPetLover" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "vaccineName" TEXT NOT NULL,
    "dateAdministered" TIMESTAMP(3) NOT NULL,
    "nextDueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VaccinationPetLover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicPetLover" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClinicPetLover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StorePetLover" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StorePetLover_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PetPetLover" ADD CONSTRAINT "PetPetLover_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentPetLover" ADD CONSTRAINT "AppointmentPetLover_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentPetLover" ADD CONSTRAINT "AppointmentPetLover_petId_fkey" FOREIGN KEY ("petId") REFERENCES "PetPetLover"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaccinationPetLover" ADD CONSTRAINT "VaccinationPetLover_petId_fkey" FOREIGN KEY ("petId") REFERENCES "PetPetLover"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
