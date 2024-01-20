<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Estudiantes
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `Estudiantes`";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function uno($ID_estudiante)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `Estudiantes` WHERE ID_estudiante=$ID_estudiante";

            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function insertar($Nombre, $Edad, $Carrera, $Promedio)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Estudiantes`( `Nombre`, `Edad`, `Carrera`, `Promedio`) VALUES ('$Nombre','$Edad','$Carrera','$Promedio')";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function actualizar($ID_estudiante,$Nombre, $Edad, $Carrera, $Promedio)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `Estudiantes` SET `Nombre`='$Nombre',`Edad`='$Edad',`Carrera`='$Carrera',`Promedio`='$Promedio' WHERE `ID_estudiante`=$ID_estudiante";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function eliminar($ID_estudiante)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "delete from Estudiantes where ID_estudiante=$ID_estudiante";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
/*

"SELECT * FROM `Proveedor` WHERE ID_estudiante=4<br />
<b>Fatal error</b>:  Uncaught TypeError: mysqli_fetch_assoc(): Argument #1 ($result) must be of type mysqli_result, string given in /Applications/MAMP/htdocs/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php:27
Stack trace:
#0 /Applications/MAMP/htdocs/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php(27): mysqli_fetch_assoc('Table 'inventar...')
#1 {main}
  thrown in <b>/Applications/MAMP/htdocs/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php</b> on line <b>27</b><br />
"
*/