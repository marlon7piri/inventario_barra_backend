import mongoose from "mongoose";
import { Schema } from "mongoose";

const UsuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    }
    ,
    isAdmin: {
      type: Boolean,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

UsuarioSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

export default mongoose.model("Usuario", UsuarioSchema);
