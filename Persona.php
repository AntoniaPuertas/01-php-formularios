<?php

// Instala la extensión "PHP Intelephense":

// Abre VS Code
// Ve a la sección de extensiones (icono de cuadrados en la barra lateral izquierda o Ctrl+Shift+X)
// Busca "PHP Intelephense"
// Haz clic en "Instalar"


// Una vez instalada, puedes generar getters y setters así:

// Escribe tu clase con las propiedades
// Coloca el cursor dentro de la clase
// Presiona Ctrl+Shift+P (o Cmd+Shift+P en Mac) para abrir la paleta de comandos
// Escribe "PHP: Generate Getters and Setters" y selecciona esta opción
// Elige las propiedades para las que quieres generar getters y setters


// Para generar un constructor:

// Sigue los mismos pasos, pero busca "PHP: Generate Constructor" en la paleta de comandos

class Persona {
    // Propiedades
    private $nombre;
    private $edad;
    // Constructor
    public function __construct($nombre, $edad) {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    // Métodos
    public function saludar() {
        return "Hola, mi nombre es " . $this->nombre . " y tengo " . $this->edad . " años.";
    }

    // Getters
    public function getNombre() {
        return $this->nombre;
    }

    public function getEdad() {
        return $this->edad;
    }

    // Setters
    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setEdad($edad) {
        $this->edad = $edad;
    }
}