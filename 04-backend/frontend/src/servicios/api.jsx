import axios from 'axios';

const API_URL = 'http://localhost:3001/productos';

export const obtProductos = async () => {
  const respuesta = await axios.get(API_URL);
  return respuesta.data;
};

export const obtProducto = async (id) => {
  const respuesta = await axios.get(`${API_URL}/${id}`);
  return respuesta.data;
};

export const insertaProducto = async (producto) => {
  const respuesta = await axios.post(API_URL, producto);
  return respuesta.data;
};

export const actualizaProducto = async (id, producto) => {
  const respuesta = await axios.put(`${API_URL}/${id}`, producto);
  return respuesta.data;
};

export const eliminaProducto = async (id) => {
  const respuesta = await axios.delete(`${API_URL}/${id}`);
  return respuesta.data;
};