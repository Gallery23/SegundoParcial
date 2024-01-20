import { Component } from '@angular/core';
import { IEstudiantes} from '../../Interfaces/iestudiantes';
import { EstudiantesService } from '../../Services/estudiantes.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css',
})
export class EstudiantesComponent {
  title = 'Estudiantes';
  estudiantes: IEstudiantes[];

  constructor(private estudiantesServicio: EstudiantesService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.estudiantesServicio.todos().subscribe((listaestudiantes) => {
      this.estudiantes = listaestudiantes;
      console.log(listaestudiantes);
    });
  }
  alerta() {
    Swal.fire('Estudiantes', 'Mensaje en estudiantes', 'success');
  }

  eliminar(ID_estudiante: number) {
    Swal.fire({
      title: 'Estudiantes',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.estudiantesServicio.eliminar(ID_estudiante).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Estudiantes',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Estudiantes',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
