export const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(error.statusCode || 500).json({
    mensaje: error.mensaje || "Error interno del servidor",
    error: error.message,
  });
};
