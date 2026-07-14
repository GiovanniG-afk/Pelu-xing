import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
  {
    cliente: {
      nombre: { type: String, required: true },
      direccion: { type: String, required: true },
      ciudad: { type: String, required: true },
    },
    items: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Producto",
          required: true,
        },
        nombre: { type: String, required: true },
        cantidad: { type: Number, required: true, min: 1 },
        precioUnitario: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
    estado: {
      type: String,
      enum: ["pendiente", "enviado", "entregado"],
      default: "pendiente",
    },
  },
  { timestamps: true }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;