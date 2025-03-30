<?php
try {
    $dsn = 'mysql:host=144.126.128.78;port=3306;dbname=rest_db;charset=utf8mb4';
    $user = 'root';
    $pass = '1984Avv!';

    $db = new PDO($dsn, $user, $pass);
    echo "Conexión exitosa a la base de datos.";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
