import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productos/rutas.js';
import userRoutes from './routes/usuarios/rutas.js';
import proveedoresRoutes from './routes/proveedores/rutas.js';

const app = express()
app.use(cors())
app.use(express.json())
app.use(productRoutes)
app.use(userRoutes)
app.use(proveedoresRoutes)


export default app;