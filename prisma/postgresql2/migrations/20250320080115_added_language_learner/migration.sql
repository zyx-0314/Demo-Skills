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

-- CreateTable
CREATE TABLE "LanguageLearnerUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'learner',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LanguageLearnerUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageLearnerPlatform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "languagesOffered" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LanguageLearnerPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageLearnerReview" (
    "id" TEXT NOT NULL,
    "platformId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LanguageLearnerReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageLearnerReviewLike" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LanguageLearnerReviewLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageLearnerUserVote" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "voterId" TEXT NOT NULL,
    "voteType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LanguageLearnerUserVote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventOrganizerUser_email_key" ON "EventOrganizerUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageLearnerUser_email_key" ON "LanguageLearnerUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageLearnerReviewLike_userId_reviewId_key" ON "LanguageLearnerReviewLike"("userId", "reviewId");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageLearnerUserVote_userId_voterId_key" ON "LanguageLearnerUserVote"("userId", "voterId");

-- AddForeignKey
ALTER TABLE "EventOrganizerTask" ADD CONSTRAINT "EventOrganizerTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOrganizerGuest" ADD CONSTRAINT "EventOrganizerGuest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOrganizerVenue" ADD CONSTRAINT "EventOrganizerVenue_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventOrganizerServiceProvider" ADD CONSTRAINT "EventOrganizerServiceProvider_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "EventOrganizerUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerPlatform" ADD CONSTRAINT "LanguageLearnerPlatform_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "LanguageLearnerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerReview" ADD CONSTRAINT "LanguageLearnerReview_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "LanguageLearnerPlatform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerReview" ADD CONSTRAINT "LanguageLearnerReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "LanguageLearnerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerReviewLike" ADD CONSTRAINT "LanguageLearnerReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "LanguageLearnerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerReviewLike" ADD CONSTRAINT "LanguageLearnerReviewLike_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "LanguageLearnerReview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerUserVote" ADD CONSTRAINT "LanguageLearnerUserVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "LanguageLearnerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageLearnerUserVote" ADD CONSTRAINT "LanguageLearnerUserVote_voterId_fkey" FOREIGN KEY ("voterId") REFERENCES "LanguageLearnerUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
