-- CreateTable
CREATE TABLE "ElderlyCareCompanionAppointment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "medicationDetails" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElderlyCareCompanionAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElderlyCareCompanionClinic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElderlyCareCompanionClinic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElderlyCareCompanionStore" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElderlyCareCompanionStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ElderlyCareCompanionRecord" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "recordType" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElderlyCareCompanionRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ElderlyCareCompanionAppointment" ADD CONSTRAINT "ElderlyCareCompanionAppointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElderlyCareCompanionRecord" ADD CONSTRAINT "ElderlyCareCompanionRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
