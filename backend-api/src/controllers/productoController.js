import Producto from "../models/Producto.js";

export const obtenerProductos = async (req, res, next) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    next(error);
  }
};

export const obtenerProductoPorId = async (req, res, next) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
};

export const crearProducto = async (req, res, next) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    next(error);
  }
};

export const actualizarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.status(200).json(producto);
  } catch (error) {
    next(error);
  }
};

export const eliminarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
    res.status(200).json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};
