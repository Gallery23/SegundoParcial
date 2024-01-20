//Importaciones//
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { IEstudiantes } from '../../../Interfaces/iestudiantes'; //1
import { EstudiantesService } from '../../../Services/estudiantes.service';
import { MateriasService } from '../../../Services/materias.service';

//Decorador @Component
@Component({
  selector: 'app-nuevo-materia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-materia.component.html',
  styleUrl: './nuevo-materia.component.css',
})

//Exportar clase//
export class NuevoMateriaComponent {
  title = 'Nuevo Materia';
  id!: number;

  ListaEstudiante: IEstudiantes[];

  //Define varios campos dentro del formulario usando 'FormControl' con validadores
  materia: FormGroup = new FormGroup({
    ID_materia: new FormControl('', Validators.required),
    Nombre_materia: new FormControl('', Validators.required),
    ID_estudiante: new FormControl('', Validators.required),
    Calificacion: new FormControl('', Validators.required),
    Fecha_examen: new FormControl('', Validators.required),
  });
  //Inyecta servicios en el constructor
  constructor(
    private materiaServicio: MateriasService,
    private rutas: Router,
    private parametros: ActivatedRoute,
    private estudianteServicio: EstudiantesService,
  ) {}
 //Método de ciclo de vida de Angular que se ejecuta después de que el componente se inicializa.
  async ngOnInit() {
    this.id = this.parametros.snapshot.params['id']; //Captura el parámetro 'id' de la ruta actual.
    await this.cargaEstudiantes(); //Utiliza el servicio de estudiantes para cargar la lista de estudiantes.
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Materia'; //Carga la lista de estudiantes y ajusta el título según si es una nueva materia o una actualización.
    } else {
      this.title = 'Actualizar Materia';
      this.materiaServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.materia.patchValue({
          Nombre_materia: res.Nombre_materia,
          ID_estudiante: res.ID_estudiante,
          Calificacion: res.Calificacion,
          Fecha_examen: res.Fecha_examen,
        });
      });
    }
  }
  cargaEstudiantes() {
    this.estudianteServicio.todos().subscribe((res) => {
      this.ListaEstudiante = res;
    });
  }

  get f() { //Devuelve los controles del formulario materia para facilitar el acceso a ellos en el HTML.
    return this.materia.controls;
  }
  grabar() {
    Swal.fire({ //muestra un cuadro de diálogo de confirmación antes de realizar una acción.
      title: 'Estudiantes', 
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => { //Dependiendo de la respuesta del usuario, realiza operaciones de inserción o actualización utilizando el servicio materiaServicio.
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.materiaServicio.insertar(this.materia.value).subscribe((res) => {
            Swal.fire({
              title: 'Estudiantes',
              text: 'Se insertó con éxito el registro',
              icon: 'success',
            });
            this.rutas.navigate(['/dashboard/materias']); //Navega a la ruta correspondiente después de completar la acción
            this.id = 0;
          });
        } else {
          this.materiaServicio
            .actualizar(this.materia.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Estudiantes',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/dashboard/materias']);
              this.id = 0;
            });
        }
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
