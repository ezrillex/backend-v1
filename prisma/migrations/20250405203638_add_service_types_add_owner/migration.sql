/*
  Warnings:

  - Added the required column `owner` to the `Monitors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('FREE', 'BASIC', 'STANDARD', 'PREMIUM');

-- AlterTable
ALTER TABLE "Monitors" ADD COLUMN     "owner" TEXT NOT NULL,
ADD COLUMN     "type" "ServiceType" NOT NULL DEFAULT 'FREE';
