import {Router} from 'express';
import {getProductsRequest,createProductRequest,getProductRequest,updateProductRequest,deleteProductRequest} from '../../controllers/productos/controllers.js';



const routes = Router();

routes.get("/api/productos",getProductsRequest)
routes.post("/api/productos",createProductRequest)
routes.delete("/api/productos/:id",deleteProductRequest)
routes.get("/api/productos/:id",getProductRequest)
routes.put("/api/productos/:id",updateProductRequest)



export default routes