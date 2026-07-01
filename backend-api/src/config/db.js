import mongoose from "mongoose";

const resolveMongoUri = () => {
  return process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pelu-xing";
};

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return true;
  }

  const mongoUri = resolveMongoUri();

  try {
    await mongoose.connect(mongoUri, {
      family: 4,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB conectado correctamente");
    return true;
  } catch (error) {
    console.error("No se pudo conectar a MongoDB:", error.message);
    console.warn("Continuando sin base de datos. Las rutas que dependan de ella devolverán errores hasta que la conexión esté disponible.");
    return false;
  }
};

export { resolveMongoUri };
export default connectDB;
