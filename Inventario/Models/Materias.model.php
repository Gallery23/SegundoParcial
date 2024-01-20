<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Materias
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT Materias.*, Estudiantes.Nombre as estudiante FROM `Materias` INNER JOIN Estudiantes on Materias.ID_estudiante = Estudiantes.ID_estudiante";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function uno($ID_materia)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM `Materias` WHERE ID_materia=$ID_materia";
            $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function insertar($Nombre_materia, $ID_estudiante, $Calificacion, $Fecha_examen)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO `Materias`( `Nombre_materia`, `ID_estudiante`, `Calificacion`, `Fecha_examen`) VALUES ('$Nombre_materia','$ID_estudiante',$Calificacion,'$Fecha_examen')";
            $result = mysqli_query($con, $cadena);
            return 'ok';
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function actualizar($ID_materia, $Nombre_materia, $ID_estudiante, $Calificacion, $Fecha_examen)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE `Materias` SET `Nombre_materia`='$Nombre_materia',`ID_estudiante`='$ID_estudiante',`Calificacion`='$Calificacion',`Fecha_examen`='$Fecha_examen' WHERE `ID_materia`=$ID_materia";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
    public function eliminar($ID_materia)
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "delete from Materias where ID_materia=$ID_materia";
            $result = mysqli_query($con, $cadena);
            return "ok";
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }
}
