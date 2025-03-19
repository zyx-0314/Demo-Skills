/*
  Warnings:

  - You are about to drop the `EventOrganizerGuest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventOrganizerServiceProvider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventOrganizerTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventOrganizerUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventOrganizerVenue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EventOrganizerGuest" DROP CONSTRAINT "EventOrganizerGuest_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventOrganizerServiceProvider" DROP CONSTRAINT "EventOrganizerServiceProvider_submittedBy_fkey";

-- DropForeignKey
ALTER TABLE "EventOrganizerTask" DROP CONSTRAINT "EventOrganizerTask_userId_fkey";

-- DropForeignKey
ALTER TABLE "EventOrganizerVenue" DROP CONSTRAINT "EventOrganizerVenue_submittedBy_fkey";

-- DropTable
DROP TABLE "EventOrganizerGuest";

-- DropTable
DROP TABLE "EventOrganizerServiceProvider";

-- DropTable
DROP TABLE "EventOrganizerTask";

-- DropTable
DROP TABLE "EventOrganizerUser";

-- DropTable
DROP TABLE "EventOrganizerVenue";
