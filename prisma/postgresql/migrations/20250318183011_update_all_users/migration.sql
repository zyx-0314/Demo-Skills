/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AppointmentPetLover" DROP CONSTRAINT "AppointmentPetLover_petId_fkey";

-- DropForeignKey
ALTER TABLE "AppointmentPetLover" DROP CONSTRAINT "AppointmentPetLover_userId_fkey";

-- DropForeignKey
ALTER TABLE "BookmarkDIYHomes" DROP CONSTRAINT "BookmarkDIYHomes_postId_fkey";

-- DropForeignKey
ALTER TABLE "BookmarkDIYHomes" DROP CONSTRAINT "BookmarkDIYHomes_userId_fkey";

-- DropForeignKey
ALTER TABLE "BookmarkUrbanExplorer" DROP CONSTRAINT "BookmarkUrbanExplorer_placeId_fkey";

-- DropForeignKey
ALTER TABLE "BookmarkUrbanExplorer" DROP CONSTRAINT "BookmarkUrbanExplorer_userId_fkey";

-- DropForeignKey
ALTER TABLE "ElderlyCareCompanionAppointment" DROP CONSTRAINT "ElderlyCareCompanionAppointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "ElderlyCareCompanionRecord" DROP CONSTRAINT "ElderlyCareCompanionRecord_userId_fkey";

-- DropForeignKey
ALTER TABLE "FoodieFood" DROP CONSTRAINT "FoodieFood_submittedBy_fkey";

-- DropForeignKey
ALTER TABLE "FoodieLike" DROP CONSTRAINT "FoodieLike_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodieLike" DROP CONSTRAINT "FoodieLike_userId_fkey";

-- DropForeignKey
ALTER TABLE "FoodieLocation" DROP CONSTRAINT "FoodieLocation_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodieLocation" DROP CONSTRAINT "FoodieLocation_submittedBy_fkey";

-- DropForeignKey
ALTER TABLE "FoodieReview" DROP CONSTRAINT "FoodieReview_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodieReview" DROP CONSTRAINT "FoodieReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikeDIYHomes" DROP CONSTRAINT "LikeDIYHomes_postId_fkey";

-- DropForeignKey
ALTER TABLE "LikeDIYHomes" DROP CONSTRAINT "LikeDIYHomes_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikeUrbanExplorer" DROP CONSTRAINT "LikeUrbanExplorer_placeId_fkey";

-- DropForeignKey
ALTER TABLE "LikeUrbanExplorer" DROP CONSTRAINT "LikeUrbanExplorer_userId_fkey";

-- DropForeignKey
ALTER TABLE "PetPetLover" DROP CONSTRAINT "PetPetLover_userId_fkey";

-- DropForeignKey
ALTER TABLE "PlaceUrbanExplorer" DROP CONSTRAINT "PlaceUrbanExplorer_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "PostDIYHomes" DROP CONSTRAINT "PostDIYHomes_userId_fkey";

-- DropForeignKey
ALTER TABLE "ReportDIYHomes" DROP CONSTRAINT "ReportDIYHomes_postId_fkey";

-- DropForeignKey
ALTER TABLE "ReportDIYHomes" DROP CONSTRAINT "ReportDIYHomes_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "ReportDIYHomes" DROP CONSTRAINT "ReportDIYHomes_userId_fkey";

-- DropForeignKey
ALTER TABLE "ReportUrbanExplorer" DROP CONSTRAINT "ReportUrbanExplorer_placeId_fkey";

-- DropForeignKey
ALTER TABLE "ReportUrbanExplorer" DROP CONSTRAINT "ReportUrbanExplorer_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "ReportUrbanExplorer" DROP CONSTRAINT "ReportUrbanExplorer_userId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewDIYHomes" DROP CONSTRAINT "ReviewDIYHomes_postId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewDIYHomes" DROP CONSTRAINT "ReviewDIYHomes_userId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewUrbanExplorer" DROP CONSTRAINT "ReviewUrbanExplorer_placeId_fkey";

-- DropForeignKey
ALTER TABLE "ReviewUrbanExplorer" DROP CONSTRAINT "ReviewUrbanExplorer_userId_fkey";

-- DropForeignKey
ALTER TABLE "VaccinationPetLover" DROP CONSTRAINT "VaccinationPetLover_petId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "UserDIYHomes" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDIYHomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserUrbanExplorer" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserUrbanExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFoodie" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFoodie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPetLover" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPetLover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserElderlyCareCompanion" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserElderlyCareCompanion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDIYHomes_email_key" ON "UserDIYHomes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserUrbanExplorer_email_key" ON "UserUrbanExplorer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserFoodie_email_key" ON "UserFoodie"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPetLover_email_key" ON "UserPetLover"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserElderlyCareCompanion_email_key" ON "UserElderlyCareCompanion"("email");

-- AddForeignKey
ALTER TABLE "PostDIYHomes" ADD CONSTRAINT "PostDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewDIYHomes" ADD CONSTRAINT "ReviewDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewDIYHomes" ADD CONSTRAINT "ReviewDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeDIYHomes" ADD CONSTRAINT "LikeDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeDIYHomes" ADD CONSTRAINT "LikeDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkDIYHomes" ADD CONSTRAINT "BookmarkDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkDIYHomes" ADD CONSTRAINT "BookmarkDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportDIYHomes" ADD CONSTRAINT "ReportDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportDIYHomes" ADD CONSTRAINT "ReportDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportDIYHomes" ADD CONSTRAINT "ReportDIYHomes_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "ReviewDIYHomes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaceUrbanExplorer" ADD CONSTRAINT "PlaceUrbanExplorer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "UserUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUrbanExplorer" ADD CONSTRAINT "ReviewUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUrbanExplorer" ADD CONSTRAINT "ReviewUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeUrbanExplorer" ADD CONSTRAINT "LikeUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeUrbanExplorer" ADD CONSTRAINT "LikeUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkUrbanExplorer" ADD CONSTRAINT "BookmarkUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkUrbanExplorer" ADD CONSTRAINT "BookmarkUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUrbanExplorer" ADD CONSTRAINT "ReportUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUrbanExplorer" ADD CONSTRAINT "ReportUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUrbanExplorer" ADD CONSTRAINT "ReportUrbanExplorer_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "ReviewUrbanExplorer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieFood" ADD CONSTRAINT "FoodieFood_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "UserFoodie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLocation" ADD CONSTRAINT "FoodieLocation_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "UserFoodie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLocation" ADD CONSTRAINT "FoodieLocation_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodieFood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieReview" ADD CONSTRAINT "FoodieReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserFoodie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieReview" ADD CONSTRAINT "FoodieReview_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodieFood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLike" ADD CONSTRAINT "FoodieLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserFoodie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLike" ADD CONSTRAINT "FoodieLike_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodieFood"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetPetLover" ADD CONSTRAINT "PetPetLover_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserPetLover"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentPetLover" ADD CONSTRAINT "AppointmentPetLover_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserPetLover"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentPetLover" ADD CONSTRAINT "AppointmentPetLover_petId_fkey" FOREIGN KEY ("petId") REFERENCES "PetPetLover"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VaccinationPetLover" ADD CONSTRAINT "VaccinationPetLover_petId_fkey" FOREIGN KEY ("petId") REFERENCES "PetPetLover"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElderlyCareCompanionAppointment" ADD CONSTRAINT "ElderlyCareCompanionAppointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserElderlyCareCompanion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ElderlyCareCompanionRecord" ADD CONSTRAINT "ElderlyCareCompanionRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserElderlyCareCompanion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
