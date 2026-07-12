import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    isOffer: { type: Boolean, default: false },
    discountPrice: { type: Number, default: 0 },
    rating: { type: Number, default: 5.0 },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    isNew: { type: Boolean, default: false },
    description: { type: String, required: true },
    images: [{ type: String }],
    variants: {
      sizes: [{ type: String }],
      colors: [{ type: String }],
    },
    reviews: [
      {
        user: String,
        text: String,
        stars: Number,
      },
    ],
  },
  { timestamps: true }
);

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;
