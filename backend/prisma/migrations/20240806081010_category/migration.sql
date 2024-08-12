/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryName_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryName";

-- DropTable
DROP TABLE "Category";
