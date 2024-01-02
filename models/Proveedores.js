import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProveedoresSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

ProveedoresSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

export default mongoose.model("Proveedores", ProveedoresSchema);
