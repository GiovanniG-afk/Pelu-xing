import dotenv from "dotenv";
import app from "../src/app.js";
import connectDB from "../src/config/db.js";

dotenv.config();

let conectado = false;

export default async function handler(req, res) {
  if (!conectado) {
    await connectDB();
    conectado = true;
  }
  return app(req, res);
}