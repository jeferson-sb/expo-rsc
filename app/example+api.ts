import fs from "fs/promises";

// Requires a expo server to run

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const files = await fs.readdir(".", { encoding: "utf8" });
  return Response.json({
    hello: "world",
    id: id || "0",
    filescount: files.length,
  });
}

export async function POST(request: Request) {
  return Response.json({ ok: true });
}
