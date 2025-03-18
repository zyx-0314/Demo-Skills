-- CreateTable
CREATE TABLE "PlaceUrbanExplorer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PlaceUrbanExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewUrbanExplorer" (
    "id" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewUrbanExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikeUrbanExplorer" (
    "id" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeUrbanExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookmarkUrbanExplorer" (
    "id" TEXT NOT NULL,
    "placeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookmarkUrbanExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportUrbanExplorer" (
    "id" TEXT NOT NULL,
    "placeId" TEXT,
    "reviewId" TEXT,
    "userId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReportUrbanExplorer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LikeUrbanExplorer_placeId_userId_key" ON "LikeUrbanExplorer"("placeId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "BookmarkUrbanExplorer_placeId_userId_key" ON "BookmarkUrbanExplorer"("placeId", "userId");

-- AddForeignKey
ALTER TABLE "PlaceUrbanExplorer" ADD CONSTRAINT "PlaceUrbanExplorer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUrbanExplorer" ADD CONSTRAINT "ReviewUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewUrbanExplorer" ADD CONSTRAINT "ReviewUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeUrbanExplorer" ADD CONSTRAINT "LikeUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeUrbanExplorer" ADD CONSTRAINT "LikeUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkUrbanExplorer" ADD CONSTRAINT "BookmarkUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookmarkUrbanExplorer" ADD CONSTRAINT "BookmarkUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUrbanExplorer" ADD CONSTRAINT "ReportUrbanExplorer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUrbanExplorer" ADD CONSTRAINT "ReportUrbanExplorer_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "PlaceUrbanExplorer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReportUrbanExplorer" ADD CONSTRAINT "ReportUrbanExplorer_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "ReviewUrbanExplorer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
