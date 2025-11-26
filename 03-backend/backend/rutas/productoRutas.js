import express from'express';
import{
  muestraProductos,
  muestraProducto,
  insertaProducto,
  actualizaProducto,
  eliminaProducto
} from'../controladores/productoControlador.js';

const rutas=express.Router();

rutas.get('/productos', muestraProductos);
rutas.get('/productos/:id', muestraProducto);
rutas.post('/productos', insertaProducto);
rutas.put('/productos/:id', actualizaProducto);
rutas.delete('/productos/:id', eliminaProducto);

export default rutas;

