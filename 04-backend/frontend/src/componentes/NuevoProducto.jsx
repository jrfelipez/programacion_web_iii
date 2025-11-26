import {useState} from 'react';
import { 
  insertaProducto
} from '../servicios/api.jsx';

function NuevoProducto({volver}) {
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  });

  function leeProducto(e) {
    guardarProducto({
      ...producto,
      [e.target.name]:e.target.value
    });
  };

  async function insertaProd(){
    const resultado = await insertaProducto(producto);
  };

  return (
    <>
      <main className="caja-contenido col-9">
      <h2>Nuevo Producto</h2>
      <form onSubmit={insertaProd}>
        <legend>Llena todos los campos</legend>
        <div className="campo">
          <label>Nombre:</label>
          <input 
            type="text"
            name="nombre"
            placeholder="Nombre Producto"
            onChange = {leeProducto}
          />
        </div>
        <div className="campo">
          <label>Precio:</label>
          <input 
            type="number"
            name="precio"
            placeholder="Precio"
            min = "0.00"
            step="0.10"
            onChange = {leeProducto}
          />                    
        </div>
        <div className="enviar">        
          <input 
            type="submit"
            className="btn btn-azul"
            value="Agregar Producto"
          />
          <input 
            type="button"
            className="btn btn-naranja"
            value="Cancelar"
            onClick = {volver}
          />
        </div>
      </form>
      </main>
    </>
  );
}

export default NuevoProducto;