-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "email" TEXT,
    "rating" INTEGER NOT NULL,
    "content_fr" TEXT,
    "content_en" TEXT,
    "content_pt" TEXT,
    "locale" TEXT NOT NULL DEFAULT 'fr',
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE INDEX "Review_locale_idx" ON "Review"("locale");

-- CreateIndex
CREATE INDEX "Review_approved_visible_idx" ON "Review"("approved", "visible");
