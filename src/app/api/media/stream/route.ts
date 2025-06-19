import { google } from "googleapis";
import { NextRequest } from "next/server";
import type { Readable } from "stream";

function nodeStreamToWeb(stream: Readable): ReadableStream<Uint8Array> {
  return new ReadableStream({
    start(controller) {
      stream.on("data", (chunk) => controller.enqueue(chunk));
      stream.on("end", () => controller.close());
      stream.on("error", (err) => controller.error(err));
    },
  });
}

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return new Response("Missing ID", { status: 400 });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  try {
    const fileMeta = await drive.files.get({ fileId: id, fields: "mimeType" });
    const mimeType = fileMeta.data.mimeType || "application/octet-stream";

    const streamRes = await drive.files.get(
      { fileId: id, alt: "media" },
      { responseType: "stream" },
    );

    // Конвертируем Node Readable в Web ReadableStream
    const webStream = nodeStreamToWeb(streamRes.data as Readable);

    return new Response(webStream, {
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Stream error:", err);
    return new Response("Failed to fetch video stream", { status: 500 });
  }
}
