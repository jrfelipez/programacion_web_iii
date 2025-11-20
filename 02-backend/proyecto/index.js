import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

app.get('/productos', 
  async (req, res) => {
    const [resultado] = await db.query('SELECT * FROM productos');
    res.json(resultado);
  }
);

app.get('/productos/:id', 
  async (req, res) => {
    const id = req.params.id;
    const [resultado] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    res.json(resultado[0]);
  }
);

app.post('/productos', 
  async (req, res) => {
    const [nombre,precio] = [
      req.body.nombre,
      req.body.precio
    ];
    const [resultado] = await db.query('INSERT INTO productos(nombre, precio) VALUES (?,?)',[nombre, precio]);
    res.json(resultado);
  }
);

app.put('/productos/:id', 
  async (req, res) => {
    const id = req.params.id;
    const { nombre, precio } = req.body;
    const [resultado] = await db.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id]);
    //res.json({ message: 'Producto actualizado correctamente' });
    res.json(resultado);
  }
);

app.delete('/productos/:id', 
  async (req, res) => {
    const id = req.params.id;
    const [resultado] = await db.query('DELETE FROM productos WHERE id = ?', [id]);
    //res.json({ message: 'Producto eliminado correctamente' });
    res.json(resultado);
  }
);

const puerto = 3001;
app.listen(puerto, 
  () => { console.log(`Servidor en http://localhost:${puerto}`);
});

