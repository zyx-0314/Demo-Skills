-- CreateTable
CREATE TABLE "EventOrganizerUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventOrganizerUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOrganizerTask" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventOrganizerTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOrganizerGuest" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventOrganizerGuest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOrganizerVenue" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "amenities" TEXT NOT NULL,
    "submittedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventOrganizerVenue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOrganizerServiceProvider" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "submittedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventOrganizerServiceProvider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventOrganizerUser_email_key" ON "EventOrganizerUser"("email");

-- AddForeignKey
ALTER TABLE "EventOrganizerTask" ADD CONSTRAINT "EventOrganizerTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOrganizerGuest" ADD CONSTRAINT "EventOrganizerGuest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOrganizerVenue" ADD CONSTRAINT "EventOrganizerVenue_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOrganizerServiceProvider" ADD CONSTRAINT "EventOrganizerServiceProvider_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
