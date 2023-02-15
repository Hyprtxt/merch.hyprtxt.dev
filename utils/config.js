// Load dotenv over Deno.env
import { load } from "$std/dotenv/mod.ts";
import { cleanEnv, host, port, str, url } from "envalid";

const ENV = cleanEnv(await load(), {
  BASE_URL: url(),
  DENO_ENV: str({ choices: ["development", "testing", "production"] }),
  PORT: port(),
  SHOPIFY_SHOP: host(),
  SHOPIFY_ACCESS_TOKEN: str(),
});

export const {
  BASE_URL,
  DENO_ENV,
  PORT,
  SHOPIFY_SHOP,
  SHOPIFY_ACCESS_TOKEN,
} = ENV;

export default ENV;
