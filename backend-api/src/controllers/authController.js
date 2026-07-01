import Usuario from "../models/Usuario.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ mensaje: "Completa todos los campos" });

    const usuario = await Usuario.findOne({ email, password });
    if (!usuario)
      return res.status(401).json({ mensaje: "Credenciales inválidas" });

    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ mensaje: "Completa todos los campos" });

    const existe = await Usuario.findOne({ email });
    if (existe)
      return res.status(400).json({ mensaje: "El correo ya está registrado" });

    const usuario = await Usuario.create({ name, email, password, role: "user" });
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
};
