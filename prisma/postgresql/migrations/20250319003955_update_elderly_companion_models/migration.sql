-- CreateTable
CREATE TABLE "ElderlyCareCompanionMedicationTracking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "medicationId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ElderlyCareCompanionMedicationTracking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ElderlyCareCompanionMedicationTracking" ADD CONSTRAINT "ElderlyCareCompanionMedicationTracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserElderlyCareCompanion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElderlyCareCompanionMedicationTracking" ADD CONSTRAINT "ElderlyCareCompanionMedicationTracking_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "ElderlyCareCompanionAppointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
