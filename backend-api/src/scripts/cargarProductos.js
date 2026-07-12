import dotenv from "dotenv";
import fs from "fs";
import mongoose from "mongoose";
import Producto from "../models/Producto.js";

dotenv.config();

const cargarProductos = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { family: 4 });
    console.log("MongoDB conectado correctamente");

    const rutaArchivo = new URL("../../data/MOCK_DATA.json", import.meta.url);
    const datosCrudos = JSON.parse(fs.readFileSync(rutaArchivo, "utf-8"));

    const datos = datosCrudos.map((producto) => ({
      ...producto,
      category: producto.category || "Sin categoría",
      stock: producto.stock ?? 0,
      description: producto.description || "Sin descripción disponible",
    }));

    const resultado = await Producto.insertMany(datos);
    console.log(`${resultado.length} productos insertados correctamente`);

    process.exit(0);
  } catch (error) {
    console.error("Error al cargar productos:", error.message);
    process.exit(1);
  }
};

cargarProductos();