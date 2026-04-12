import type { NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  req: NextRequest,
  context: any
): Promise<Response> {
  const maybeParams = context?.params;
  const resolved = typeof maybeParams?.then === "function" ? await maybeParams : maybeParams;
  const segments: string[] = Array.isArray(resolved?.path) ? resolved.path : [];
  if (!segments.length) {
    return new Response("Bad Request", { status: 400 });
  }
  const rel = segments.join("/");
  const safe = rel.replace(/\\/g, "/");
  const base = path.join(process.cwd(), "pics");
  const filePath = path.join(base, safe);
  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    let type = "application/octet-stream";
    if (ext === ".jpg" || ext === ".jpeg") type = "image/jpeg";
    else if (ext === ".png") type = "image/png";
    else if (ext === ".webp") type = "image/webp";
    else if (ext === ".svg") type = "image/svg+xml";
    return new Response(data, {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
