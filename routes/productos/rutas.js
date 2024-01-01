import {Router} from 'express';
import {getProductsRequest,createProductRequest,getProductRequest,updateProductRequest,deleteProductRequest} from '../../controllers/productos/controllers.js';



const productRoutes = Router();

productRoutes.get("/api/productos",getProductsRequest)
productRoutes.post("/api/productos",createProductRequest)
productRoutes.delete("/api/productos/:id",deleteProductRequest)
productRoutes.get("/api/productos/:id",getProductRequest)
productRoutes.put("/api/productos/:id",updateProductRequest)



export default productRoutes