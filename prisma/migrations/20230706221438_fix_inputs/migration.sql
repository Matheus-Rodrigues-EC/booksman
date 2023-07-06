/*
  Warnings:

  - You are about to drop the column `garde` on the `books` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "garde",
ADD COLUMN     "grade" INTEGER,
ALTER COLUMN "read" SET DEFAULT false,
ALTER COLUMN "review" DROP NOT NULL;
