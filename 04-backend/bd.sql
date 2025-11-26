CREATE DATABASE basededatos;
USE basededatos;
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2)
);
INSERT INTO productos(nombre, precio) VALUES ('Cuaderno', 35);
INSERT INTO productos(nombre, precio) VALUES ('Libro', 100);
INSERT INTO productos(nombre, precio) VALUES ('Regla', 20)