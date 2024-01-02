import {Router} from 'express';
import {getProveedoresRequest,createProveedoresRequest,getProveedorRequest,updateProveedoresRequest,deleteProveedoresRequest} from '../../controllers/proveedores/controllers.js';



const proveedoresRoutes = Router();

proveedoresRoutes.get("/api/proveedores",getProveedoresRequest)
proveedoresRoutes.post("/api/proveedores",createProveedoresRequest)
proveedoresRoutes.delete("/api/proveedores/:id",deleteProveedoresRequest)
proveedoresRoutes.get("/api/proveedores/:id",getProveedorRequest)
proveedoresRoutes.put("/api/proveedores/:id",updateProveedoresRequest)



export default proveedoresRoutes