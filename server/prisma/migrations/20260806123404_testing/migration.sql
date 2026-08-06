-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "test" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_test_key" ON "User"("test");
