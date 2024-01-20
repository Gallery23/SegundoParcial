import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMaterias } from '../Interfaces/imaterias';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Materias.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IMaterias[]> {
    return this.cliente.get<IMaterias[]>(this.urlBase + 'todos');
  }

  uno(id: number): Observable<IMaterias> {
    var materia = new FormData();
    materia.append('ID_materia', id.toString());
    return this.cliente.post<IMaterias>(this.urlBase + 'uno', materia);
  }
  insertar(materias: IMaterias): Observable<any> {
    var materia = new FormData();
    materia.append('Nombre_materia', materias.Nombre_materia.toString());
    materia.append('Profesor', materias.Profesor.toString());
    materia.append('ID_estudiante', materias.ID_estudiante.toString());
    materia.append('Califacion', materias.Calificacion.toString());
    materia.append('Fecha_examen', materias.Fecha_examen.toString());
    console.log(materia);
    return this.cliente.post(this.urlBase + 'insertar', materia);
  }
  actualizar(materias: IMaterias, id: number): Observable<any> {
    var materia = new FormData();
    materia.append('ID_materia', id.toString());
    materia.append('Nombre_materia', materias.Nombre_materia.toString());
    materia.append('Profesor', materias.Profesor.toString());
    materia.append('ID_estudiante', materias.ID_estudiante.toString());
    materia.append('Califacion', materias.Calificacion.toString());
    materia.append('Fecha_examen', materias.Fecha_examen.toString());
    return this.cliente.post(this.urlBase + 'actualizar', materia);
  }
  eliminar(id: number): Observable<any> {
    var materia = new FormData();
    materia.append('ID_materia', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', materia);
  }
}
