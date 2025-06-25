/*
  Warnings:

  - You are about to drop the column `phone` on the `Candidate` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Candidate` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_email_key" ON "Candidate"("email");

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
