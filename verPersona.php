<?php
require_once 'Persona.php';

// Ejemplo de uso
$persona = new Persona("María", 30);
echo $persona->saludar() . "\n";
echo "Nombre: " . $persona->getNombre() . "\n";
echo "Edad: " . $persona->getEdad() . "\n";

$persona->setEdad(31);
echo "Nueva edad: " . $persona->getEdad() . "\n";