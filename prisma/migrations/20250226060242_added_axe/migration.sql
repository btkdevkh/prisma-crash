/*
  Warnings:

  - Added the required column `nom` to the `Axe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Axe" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "unite" TEXT
);
INSERT INTO "new_Axe" ("id", "max", "min", "unite") SELECT "id", "max", "min", "unite" FROM "Axe";
DROP TABLE "Axe";
ALTER TABLE "new_Axe" RENAME TO "Axe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
