import Pedido from "../models/Pedido.js";

export const obtenerPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedido.find().populate("items.producto", "name sku");
    res.status(200).json(pedidos);
  } catch (error) {
    next(error);
  }
};

export const obtenerPedidoPorId = async (req, res, next) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate("items.producto", "name sku");
    if (!pedido) return res.status(404).json({ mensaje: "Pedido no encontrado" });
    res.status(200).json(pedido);
  } catch (error) {
    next(error);
  }
};

export const crearPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    next(error);
  }
};

export const actualizarPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!pedido) return res.status(404).json({ mensaje: "Pedido no encontrado" });
    res.status(200).json(pedido);
  } catch (error) {
    next(error);
  }
};

export const eliminarPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) return res.status(404).json({ mensaje: "Pedido no encontrado" });
    res.status(200).json({ mensaje: "Pedido eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};