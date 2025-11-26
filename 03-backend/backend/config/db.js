import mysql from 'mysql2/promise';  // Usamos la versión con Promesas

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});
