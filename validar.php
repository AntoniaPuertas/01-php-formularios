<?php

$errores = [];

//comprobar que se ha enviado el formulario
if($_SERVER['REQUEST_METHOD'] === "POST"){
    // echo '<pre>';
    // var_dump($_POST);
    // echo '</pre>';

    //validar nombre
    if(empty($_POST['nombre'])){
        $errores[] = "El nombre es obligatorio";
    }

    //validar correo
    if(empty($_POST['correo'])){
        $errores[] = "El correo electrónico es obligatorio";
    }elseif(filter_var($_POST['correo'], FILTER_VALIDATE_EMAIL)){
        $errores[] = "El formato del correo no es válido";
    }

    //validar contraseña
    if(empty($_POST['pass'])){
        $errores[] = "La contraseña es obligatoria";
    }

    //validar fecha
    

}