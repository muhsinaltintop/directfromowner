import { revalidateTag } from "next/cache";

export async function POST(req) {
  const body = await req.json(); // Parse the request body as JSON
  const tag = body?.model; // Extract the 'model' from the parsed body
  console.log(tag);
  const url = new URL(req.url, `http://${req.headers.host}`);
  const secret = url.searchParams.get("secret");

  if (secret !== process.env.SECRET) {
    return new Response(
      JSON.stringify({
        revalidated: false,
        now: Date.now(),
        message: "Invalid Token",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 401,
      }
    );
  }
  if (tag) {
    revalidateTag(tag);
    return new Response(
      JSON.stringify({
        revalidated: true,
        now: Date.now(),
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  }
  return new Response(
    JSON.stringify({
      revalidated: false,
      now: Date.now(),
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 400,
      statusText: "Tag couldn't find",
    }
  );
}
