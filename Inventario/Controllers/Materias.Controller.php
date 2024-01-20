<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../Models/Materias.model.php');
$stocks = new Clase_Materias;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); //defino un arreglo
        $datos = $stocks->todos(); //llamo al modelo de usuarios e invoco al procedimiento todos y almaceno en una variable
        while ($fila = mysqli_fetch_assoc($datos)) { //recorro el arreglo de datos
            $todos[] = $fila;
        }
        echo json_encode($todos); //devuelvo el arreglo en formato json
        break;
    case "uno":
        $ID_materia = $_POST["ID_materia"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $stocks->uno($ID_materia); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        $uno = mysqli_fetch_assoc($datos); //recorro el arreglo de datos
        echo json_encode($uno); //devuelvo el arreglo en formato json
        break;
    case 'insertar':
        $Nombre_materia = $_POST["Nombre_materia"];
        $ID_estudiante = $_POST["ID_estudiante"];
        $Calificacion = $_POST["Calificacion"];
        $Fecha_examen = $_POST["Fecha_examen"];


        $datos = array(); //defino un arreglo
        $datos = $stocks->insertar($Nombre_materia, $ID_estudiante, $Calificacion, $Fecha_examen); //llamo al modelo de usuarios e invoco al procedimiento insertar
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
    case 'actualizar':
        $ID_materia = $_POST["ID_materia"];
        $Nombre_materia = $_POST["Nombre_materia"];
        $Calificacion = $_POST["Calificacion"];
        $Fecha_examen= $_POST["Fecha_examen"];
        $datos = array(); //defino un arreglo
        $datos = $stocks->actualizar($ID_materia, $Nombre_materia, $ID_estudiante, $Calificacion, $Fecha_examen); //llamo al modelo de usuarios e invoco al procedimiento actual
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;

    case 'eliminar':
        $ID_materia = $_POST["ID_materia"]; //defino una variable para almacenar el id del usuario, la variable se obtiene mediante POST
        $datos = array(); //defino un arreglo
        $datos = $stocks->eliminar($ID_materia); //llamo al modelo de usuarios e invoco al procedimiento uno y almaceno en una variable
        echo json_encode($datos); //devuelvo el arreglo en formato json
        break;
}
