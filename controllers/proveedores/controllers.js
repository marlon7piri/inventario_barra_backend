import Proveedores from "../../models/Proveedores.js";

export const getProveedoresRequest = async (req, res) => {
  try {
    const proveedores = await Proveedores.find({});

    return res.json(proveedores);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createProveedoresRequest = async (req, res) => {
  const { nombre } = req.body;

  try {
    const proveedores = new Proveedores({
      nombre
    });
    const proveedoressaved = await proveedores.save();
    return res.status(200).json(proveedoressaved);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getProveedorRequest = async (req, res) => {
  const { id } = req.params;

  try {
    const proveedorFound = await Proveedores.findById(id);

    return res.json(proveedorFound);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProveedoresRequest = async (req, res) => {
  const { id } = req.params;
  const proveedor = req.body;

  const proveedorupdated = {
    nombre: proveedor.nombre,
  };
  try {
    const proveeedorfounding = await Proveedores.findByIdAndUpdate(
      id,
      proveedorupdated,
      {
        new: true,
      }
    );

    return res.json(proveeedorfounding);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteProveedoresRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const proveedordeleted = await Proveedores.findByIdAndDelete(id);

    return res.json(proveedordeleted);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
