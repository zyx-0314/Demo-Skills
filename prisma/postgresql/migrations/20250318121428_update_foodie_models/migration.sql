-- CreateTable
CREATE TABLE "FoodieFood" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cuisine" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "submittedBy" TEXT NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoodieFood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodieLocation" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "locationName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "submittedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoodieLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodieReview" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "validated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoodieReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodieLike" (
    "id" TEXT NOT NULL,
    "foodId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoodieLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FoodieLike_foodId_userId_key" ON "FoodieLike"("foodId", "userId");

-- AddForeignKey
ALTER TABLE "FoodieFood" ADD CONSTRAINT "FoodieFood_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLocation" ADD CONSTRAINT "FoodieLocation_submittedBy_fkey" FOREIGN KEY ("submittedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLocation" ADD CONSTRAINT "FoodieLocation_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodieFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieReview" ADD CONSTRAINT "FoodieReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieReview" ADD CONSTRAINT "FoodieReview_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodieFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLike" ADD CONSTRAINT "FoodieLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodieLike" ADD CONSTRAINT "FoodieLike_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "FoodieFood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
