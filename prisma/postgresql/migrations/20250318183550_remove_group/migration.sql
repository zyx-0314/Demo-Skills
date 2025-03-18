/*
  Warnings:

  - You are about to drop the column `group` on the `UserDIYHomes` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `UserElderlyCareCompanion` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `UserFoodie` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `UserPetLover` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `UserUrbanExplorer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserDIYHomes" DROP COLUMN "group";

-- AlterTable
ALTER TABLE "UserElderlyCareCompanion" DROP COLUMN "group";

-- AlterTable
ALTER TABLE "UserFoodie" DROP COLUMN "group";

-- AlterTable
ALTER TABLE "UserPetLover" DROP COLUMN "group";

-- AlterTable
ALTER TABLE "UserUrbanExplorer" DROP COLUMN "group";
