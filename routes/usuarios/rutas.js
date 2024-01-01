import {Router} from 'express';
import {getUserRequest,createUserRequest,getUsersRequest,updateUserRequest,deleteUserRequest} from '../../controllers/usuarios/controllers.js';



const userRoutes = Router();

userRoutes.get("/api/usuarios",getUsersRequest)
userRoutes.post("/api/usuarios",createUserRequest)
userRoutes.delete("/api/usuarios/:id",deleteUserRequest)
userRoutes.get("/api/usuarios/:id",getUserRequest)
userRoutes.put("/api/usuarios/:id",updateUserRequest)



export default userRoutes