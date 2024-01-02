import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductosSchemma = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    cantidad: {
      type: Number,
      require: true,
    }
    ,
    unidad: {
      type: String,
      require: true,
    },
    area: {
      type: String,
      require: true,
    },
    proveedor: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

ProductosSchemma.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

export default mongoose.model("Producto", ProductosSchemma);
