import Producto from "../../models/Productos.js";
import mongoose from "mongoose";
import Usuarios from "../../models/Usuarios.js";
import bcrypt from 'bcrypt'

export const getUsersRequest = async (req, res) => {
  try {
    const usuarios = await Usuarios.find({});

    return res.json(usuarios);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createUserRequest = async (req, res) => {
  const { nombre, password, rol } = req.body;

 const passwordhashed = await bcrypt.hash(password,10)

  try {
    const usuarios = new Usuarios({
      nombre,
      password:passwordhashed,
      rol,
    });
    const usuariossaved = await usuarios.save();
    return res.status(200).json(usuariossaved);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUserRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioFound = await Usuarios.findById(id);

    return res.json(usuarioFound);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateUserRequest = async (req, res) => {
  const { id } = req.params;
  const usuarioupdated = req.body;

  const newUsuarioUpdated = {
    nombre: usuarioupdated.nombre,
    password: usuarioupdated.password,
    rol: usuarioupdated.rol,
    
  };
  try {
    const usuarioupdated = await Usuarios.findByIdAndUpdate(id, newUsuarioUpdated, {
      new: true,
    });

    return res.json(usuarioupdated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteUserRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const usuariodeleted = await Usuarios.findByIdAndDelete(id);

    return res.json(usuariodeleted);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
