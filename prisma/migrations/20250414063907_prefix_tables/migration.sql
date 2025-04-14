/*
  Warnings:

  - You are about to drop the `Monitors` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "apm_ServiceType" AS ENUM ('FREE', 'BASIC', 'STANDARD', 'PREMIUM');

-- DropTable
DROP TABLE "Monitors";

-- DropEnum
DROP TYPE "ServiceType";

-- CreateTable
CREATE TABLE "apm_Monitors" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "duinit" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "type" "apm_ServiceType" NOT NULL DEFAULT 'FREE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "apm_Monitors_pkey" PRIMARY KEY ("id")
);
