import {db} from '../config/db.js';

export const obtTodo  = async () => {
    const [resultado] = await db.query('SELECT * FROM productos');
    return resultado;
};

export const obtProducto  = async (id) => {
    const [resultado] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    return resultado[0];
};

export const inserta  = async (producto) => {
    const { nombre, precio } = producto;
    const [resultado] = await db.query('INSERT INTO productos(nombre, precio) VALUES (?,?)',[nombre, precio]);
    return { id: resultado.insertId, ...producto };
};

export const actualiza  = async (id, producto) => {
    const { nombre, precio } = producto;
    await db.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id]);
    return { id, ...producto };
};

export const elimina  = async (id) => {
    await db.query('DELETE FROM productos WHERE id = ?', [id]);
    return id;
};
