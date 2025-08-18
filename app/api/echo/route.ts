import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const msg = searchParams.get("msg") ?? "hello";
  return new Response(JSON.stringify({ ok: true, method: "GET", msg }), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    payload = null;
  }
  return new Response(
    JSON.stringify({ ok: true, method: "POST", payload }),
    { headers: { "content-type": "application/json" } },
  );
}


