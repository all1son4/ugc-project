// src/app/api/cloudinary/route.ts

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryResource } from "@/types";

// Настройка Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET() {
  try {
    const folder = process.env.CLOUDINARY_FOLDER || "";
    const search = `folder:${folder}/*`;

    const result = await cloudinary.search
      .expression(search)
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    return NextResponse.json(result.resources as CloudinaryResource[]);
  } catch (error) {
    console.error("Cloudinary fetch failed:", error);
    return NextResponse.json(
      { error: "Cloudinary fetch failed" },
      { status: 500 },
    );
  }
}
