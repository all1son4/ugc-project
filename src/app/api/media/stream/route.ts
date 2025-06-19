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
  if (!id) return new Response("Missing ID", { status: 400 });

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  try {
    const fileMeta = await drive.files.get({
      fileId: id,
      fields: "mimeType,size",
    });
    const mimeType = fileMeta.data.mimeType || "application/octet-stream";
    const fileSize = parseInt(fileMeta.data.size || "0", 10);
    const range = req.headers.get("range");

    if (range && fileSize) {
      const bytesPrefix = "bytes=";
      if (range.startsWith(bytesPrefix)) {
        const [startStr, endStr] = range.slice(bytesPrefix.length).split("-");
        const start = parseInt(startStr, 10);
        const end = endStr ? parseInt(endStr, 10) : fileSize - 1;
        const chunkSize = end - start + 1;

        const streamRes = await drive.files.get(
          {
            fileId: id,
            alt: "media",
          },
          {
            responseType: "stream",
            headers: {
              Range: `bytes=${start}-${end}`,
            },
          },
        );

        const webStream = nodeStreamToWeb(streamRes.data as Readable);

        return new Response(webStream, {
          status: 206,
          headers: {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunkSize.toString(),
            "Content-Type": mimeType,
            "Cache-Control": "public, max-age=3600, must-revalidate",
          },
        });
      }
    }

    // Без range — отдаём всё
    const streamRes = await drive.files.get(
      { fileId: id, alt: "media" },
      { responseType: "stream" },
    );

    const webStream = nodeStreamToWeb(streamRes.data as Readable);

    return new Response(webStream, {
      status: 200,
      headers: {
        "Content-Length": fileSize.toString(),
        "Content-Type": mimeType,
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    });
  } catch (err) {
    console.error("Stream error:", err);
    return new Response("Failed to fetch video stream", { status: 500 });
  }
}
