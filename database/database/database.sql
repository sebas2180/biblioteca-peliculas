create database bd_biblioteca_peliculas;

use bd_biblioteca_peliculas;


CREATE table peliculas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL ,
    ibdm float(4)  ,
    anio integer(4),
    ranking float(4),
    votos INT(11),
    descripcion VARCHAR(2000),
    url VARCHAR(1000),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);