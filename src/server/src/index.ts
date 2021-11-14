import { config } from "dotenv";
import { join } from "path";
import { runServer } from "./server";

const isProd = process.env.NODE_ENV === "production";

// If you compile server code with webpack, this is unnecessary.

// config({
//   path: isProd ? join(__dirname, ".env.prod") : join(__dirname, "env.dev")
// });

process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error(err);
});

export const run = async () =>{
  runServer();
}
