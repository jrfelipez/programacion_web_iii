import express from 'express';
import mysql from 'mysql2';

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

app.get('/productos', 
  (req, res) => {
    const q = "SELECT * FROM productos";

    db.query(q, 
      (err, datos) => {
        if (err) {
          return res.json(err);
        }
        return res.json(datos);
      }
    );
  }
);

app.get('/productos/:id', 
  (req, res) => {
    const id = req.params.id;
    const q = "SELECT * FROM productos WHERE id = ? ";

    db.query(q, [id], 
      (err, datos) => {
        if (err) {
          return res.json(err);
        }
        return res.json(datos[0]);
      }
    );
  }
);

app.post('/productos', 
  (req, res) => {
    const q = "INSERT INTO productos (nombre, precio) VALUES (?)";

    const valores = [
      req.body.nombre,
      req.body.precio,
    ];

    db.query(q, [valores],
      (err, datos) => {
        if (err) {
          return res.send(err);
        }
        return res.json(datos);
      }
    );
  }
);

app.put('/productos/:id', 
  (req, res) => {
    const id = req.params.id;
    const q = "UPDATE productos SET nombre = ?, precio = ? WHERE id = ?";

    const valores = [
      req.body.nombre,
      req.body.precio,
    ];

    db.query(q, [...valores,id],  // [valores,id]
      (err, datos) => {
        if (err) {
          return res.send(err);
        }
        return res.json(datos);
      }
    );
  }
);

app.delete('/productos/:id', 
  (req, res) => {
    const id = req.params.id;
    const q = " DELETE FROM productos WHERE id = ? ";

    db.query(q, [id], 
      (err, datos) => {
        if (err) {
          return res.send(err);
        }
        return res.json(datos);
    }
  );
});

const puerto = 3001;
app.listen(puerto, 
  () => { console.log(`Servidor en http://localhost:${puerto}`);
});

