import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstudiantes } from '../Interfaces/iestudiantes';

@Injectable({
  providedIn: 'root',
})
export class EstudiantesService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Estudiante.Controller.php?op=';
  constructor(private estudiante: HttpClient) {}

  todos(): Observable<IEstudiantes[]> {
    return this.estudiante.get<IEstudiantes[]>(this.urlBase + 'todos');
  }

  uno(id: number): Observable<IEstudiantes> {
    var estudiante = new FormData();
    estudiante.append('ID_estudiante', id.toString());
    return this.estudiante.post<IEstudiantes>(this.urlBase + 'uno', estudiante);
  }
  insertar(estudiantes: IEstudiantes): Observable<any> {
    var estudiante = new FormData();
    estudiante.append('Nombre', estudiantes.Nombre.toString());
    estudiante.append('Edad', estudiantes.Edad.toString());
    estudiante.append('Carrera', estudiantes.Carrera.toString());
    estudiante.append('Promedio', estudiantes.Promedio.toString());
    console.log(estudiante);
    return this.estudiante.post(this.urlBase + 'insertar', estudiante);
  }
  actualizar(estudiantes: IEstudiantes, id: number): Observable<any> {
    var estudiante = new FormData();
    estudiante.append('ID_estudiante', id.toString());
    estudiante.append('Nombre', estudiantes.Nombre.toString());
    estudiante.append('Edad', estudiantes.Edad.toString());
    estudiante.append('Carrera', estudiantes.Carrera.toString());
    estudiante.append('Promedio', estudiantes.Promedio.toString());
    return this.estudiante.post(this.urlBase + 'actualizar', estudiante);
  }
  eliminar(id: number): Observable<any> {
    var estudiante = new FormData();
    estudiante.append('ID_estudiante', id.toString());
    return this.estudiante.post(this.urlBase + 'eliminar', estudiante);
  }
}
