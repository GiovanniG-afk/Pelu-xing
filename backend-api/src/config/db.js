import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("Error: no se encontró la variable MONGODB_URI en el .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      family: 4,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB conectado correctamente");
  } catch (error) {
    console.error("Error al conectar MongoDB");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;