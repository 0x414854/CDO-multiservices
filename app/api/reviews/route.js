import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET -> return approved reviews
export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        approved: true,
        visible: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    console.error("GET /api/reviews error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load reviews" },
      { status: 500 }
    );
  }
}

// POST -> create a new review
export async function POST(req) {
  try {
    const body = await req.json();
    const { author, email, rating, content, locale } = body;

    if (!author || !rating || !content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }

    const SUPPORTED_LOCALES = ["fr", "en", "pt"];
    const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "fr";

    const data = {
      author,
      email,
      rating,
      locale: safeLocale,
      approved: true,
      visible: true,
      [`content_${safeLocale}`]: content,
    };

    const review = await prisma.review.create({ data });

    return NextResponse.json({ success: true, review });
  } catch (error) {
    console.error("POST /api/reviews error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
