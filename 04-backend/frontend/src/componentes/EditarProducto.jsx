import {useState, useEffect} from 'react';
import { 
  obtProducto,
  actualizaProducto
} from '../servicios/api.jsx';

function EditarProducto({id,volver}) {
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: 0
  });

  function leeProducto(e) {
    guardarProducto({
      ...producto,
      [e.target.name]:e.target.value
    });
  };

  async function actualizaProd(){
    const resultado = await actualizaProducto(id, producto);
  };

  async function consultaProducto(){
    const resultado = await obtProducto(id);
    guardarProducto(resultado);
  };

  useEffect(
    () => {
      consultaProducto();
    }, []
  );

  return (
    <>
      <main className="caja-contenido col-9">
        <h2>Editar Producto</h2>
        <form onSubmit={actualizaProd}>
          <div className="campo">
            <label>Nombre:</label>
            <input 
              type="text"
              name="nombre"
              placeholder="Nombre Producto"
              value={producto.nombre}
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
              value={producto.precio}
              onChange = {leeProducto}
            />                    
          </div>
          <div className="enviar">        
            <input 
              type="submit"
              className="btn btn-azul"
              value="Actualizar Producto"
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

export default EditarProducto;