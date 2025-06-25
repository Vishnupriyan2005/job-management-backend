/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Candidate` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_companyId_fkey";

-- DropIndex
DROP INDEX "Candidate_email_key";

-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "createdAt",
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "companyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
