import { useState, useEffect } from "react";
import NuevoProducto from './NuevoProducto.jsx';
import EditarProducto from './EditarProducto.jsx';
import { 
  obtProductos,
  eliminaProducto
} from '../servicios/api.jsx';

function Productos() {
  const [productos, guardarProductos] = useState([]);
  const [id, setID] = useState(0);
  const [editar, setEditar] = useState(false);
  const [nuevo, setNuevo] = useState(false);
  async function consulta() {
    const resultado = await obtProductos();
    guardarProductos(resultado);
  }

  useEffect(
    () => {
        consulta();
    }, []
  );

  async function eliminaProd(id) {
    const resultado = await eliminaProducto(id);
    consulta();
  };

  if (editar) {
    return <EditarProducto id = {id} volver = {
      () => {
        setEditar(false)
      }
    }/>
  };

  if (nuevo) {
    return <NuevoProducto volver = {() => {
      setNuevo(false)
    }}/>
  };

  return (
    <>
      <main className="caja-contenido col-9">
        <h2>Lista de Productos</h2>
        <button className="btn-nuevo" onClick = {() => {
          setNuevo(true);
        }}>Nuevo Producto</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto) =>(
                <tr key = {producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>Bs.{producto.precio}</td>
                  <td>
                    <button className="btn-editar" onClick = {() => {
                      setEditar(true);
                      setID(producto.id)
                    }}>Editar</button>
                    <button className="btn-eliminar" onClick = {() =>
                      eliminaProd(producto.id)
                    }>Elimina</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Productos;