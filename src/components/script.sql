REVOKE ALL PRIVILEGES ON *.* FROM 'trinidad'@'localhost'; 
GRANT ALL PRIVILEGES ON *.* TO 'trinidad'@'localhost'; 


GRANT ALL PRIVILEGES ON `colegio_la_trinidad`.* 
TO 'trinidad_1'@'localhost' WITH GRANT OPTION; 


DROP TABLE IF EXISTS cliente;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    procedencia VARCHAR(255) NOT NULL,
    correo VARCHAR(100),
    telefono VARCHAR(25)
);

INSERT INTO cliente(nombre, apellido,procedencia,correo,telefono) 
VALUES('Diego', 'meneses', 'marinilla', NULL, NULL);

CREATE TABLE persona (
    id_persona     INT UNSIGNED NOT NULL PRIMARY KEY,
    nombre     VARCHAR(66) NOT NULL,
    apellido    VARCHAR(66),
    direccion      VARCHAR(255)
);

CREATE TABLE articulo_factura(
    num_factura      SMALLINT UNSIGNED NOT NULL,
    cod_producto   INT UNSIGNED NOT NULL,
    PRIMARY KEY (cod_producto, num_factura)
);

CREATE TABLE contacto
( 
    contacto_id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(25),
    fecha_nacimiento DATE
);


CREATE TABLE IF NOT EXISTS tarea (
    tarea_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    prioridad INT DEFAULT 3,
    fecha_inicio DATE,
    fecha_fin DATE,
    descripcion TEXT
);

INSERT INTO tarea(titulo,prioridad)
VALUES('Aprenda la declaración INSERT de MySQL',1);

INSERT INTO tarea(titulo,prioridad)
VALUES('Comprensión de la palabra clave DEFAULT en la instrucción INSERT',DEFAULT);


INSERT INTO tarea(titulo, fecha_inicio, fecha_fin)
VALUES('Insertar fecha en la tabla',CURRENT_DATE(),CURRENT_DATE());


INSERT INTO tasks(title,start_date,due_date)
VALUES('Use current date for the task',CURRENT_DATE(),CURRENT_DATE())

INSERT INTO tarea(titulo,prioridad)
VALUES  ('Mi primera tarea', 1),
	    ('Es la segunda tarea',2),
	    ('Esta es la tercera tarea de la semana.',3);


UPDATE tarea
SET descripcion = 'Descripción de las tareas que son de prioridad 3', fecha_fin = '2020-08-01'
WHERE prioridad = 3

DELETE FROM nombre_tabla [WHERE condición]
TRUNCATE tarea;


UPDATE nombre_tabla
SET columna1 = valor1, columna3 = valor2, ...
WHERE condición


DELETE FROM tarea WHERE prioridad = 3;
