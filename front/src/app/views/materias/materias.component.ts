import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { IMaterias } from '../../Interfaces/imaterias';
import { MateriasService } from '../../Services/materias.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css',
})
export class MateriaComponent {
  title = 'Materias';
  materias: IMaterias[];

  constructor(private materiaServicio: MateriasService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.materiaServicio.todos().subscribe((Listamateria) => {
      this.materias = Listamateria;
      console.log(Listamateria);
    });
  }
  alerta() {
    Swal.fire('Materias', 'Mensaje en Materias', 'success');
  }

  eliminar(ID_materia: number) {
    Swal.fire({
      title: 'Materias',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.materiaServicio.eliminar(ID_materia).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Materias',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Materias',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}
