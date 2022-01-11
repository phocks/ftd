import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import "https://deno.land/x/dotenv/load.ts";

function handler(_req: Request) {
  const data = {
    Hello: "World!",
  };
  const body = JSON.stringify(data, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);
