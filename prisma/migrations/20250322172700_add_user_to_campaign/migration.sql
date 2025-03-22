/*
  Warnings:

  - Added the required column `userId` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- First, get a default user ID
CREATE TEMP TABLE "temp_default_user" AS SELECT id FROM "User" LIMIT 1;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Campaign" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "sent" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "replies" INTEGER NOT NULL DEFAULT 0,
    "opportunities" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Campaign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Insert existing campaigns with the default user ID
INSERT INTO "new_Campaign" ("clicks", "createdAt", "id", "name", "opportunities", "progress", "replies", "sent", "status", "updatedAt", "userId")
SELECT "clicks", "createdAt", "id", "name", "opportunities", "progress", "replies", "sent", "status", "updatedAt", (SELECT id FROM "temp_default_user")
FROM "Campaign";

DROP TABLE "Campaign";
ALTER TABLE "new_Campaign" RENAME TO "Campaign";
CREATE UNIQUE INDEX "Campaign_name_key" ON "Campaign"("name");

-- Clean up
DROP TABLE "temp_default_user";

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
