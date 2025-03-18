/*
  Warnings:

  - You are about to drop the `Bookmark` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_postId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_userId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_postId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_postId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_postId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropTable
DROP TABLE "Bookmark";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "Review";

-- CreateTable
CREATE TABLE "PostDIYHomes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostDIYHomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewDIYHomes" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewDIYHomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikeDIYHomes" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeDIYHomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookmarkDIYHomes" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookmarkDIYHomes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportDIYHomes" (
    "id" TEXT NOT NULL,
    "postId" TEXT,
    "reviewId" TEXT,
    "userId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReportDIYHomes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LikeDIYHomes_postId_userId_key" ON "LikeDIYHomes"("postId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "BookmarkDIYHomes_postId_userId_key" ON "BookmarkDIYHomes"("postId", "userId");

-- AddForeignKey
ALTER TABLE "PostDIYHomes" ADD CONSTRAINT "PostDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewDIYHomes" ADD CONSTRAINT "ReviewDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewDIYHomes" ADD CONSTRAINT "ReviewDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeDIYHomes" ADD CONSTRAINT "LikeDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeDIYHomes" ADD CONSTRAINT "LikeDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkDIYHomes" ADD CONSTRAINT "BookmarkDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkDIYHomes" ADD CONSTRAINT "BookmarkDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportDIYHomes" ADD CONSTRAINT "ReportDIYHomes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportDIYHomes" ADD CONSTRAINT "ReportDIYHomes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostDIYHomes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportDIYHomes" ADD CONSTRAINT "ReportDIYHomes_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "ReviewDIYHomes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
