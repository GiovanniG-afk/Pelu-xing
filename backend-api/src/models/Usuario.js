import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    avatar: { type: String, default: "" },
  },
  { timestamps: true }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
