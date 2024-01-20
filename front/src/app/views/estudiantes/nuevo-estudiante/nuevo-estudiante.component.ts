import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EstudiantesService } from '../../../Services/estudiantes.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-estudiante',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-estudiante.component.html',
  styleUrl: './nuevo-estudiante.component.css',
})
export class NuevoEstudianteComponent {
  title = '';
  id!: number;

  estudiante: FormGroup = new FormGroup({
    Nombres: new FormControl('', Validators.required),
    Telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(17),
      Validators.minLength(7),
    ]),
    Correo: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private estudianteServicio: EstudiantesService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Estudiante';
    } else {
      this.title = 'Actualizar Estudiante';
      this.estudianteServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.estudiante.patchValue({
          Nombre: res.Nombre,
          Edad: res.Edad,
          Carrera: res.Carrera,
          Promedio: res.Promedio,
        });
      });
    }
  }
  get f() {
    return this.estudiante.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Estudiantes',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.estudianteServicio
            .insertar(this.estudiante.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Estudiantes',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/dashboard/estudiantes']);
              this.id = 0;
            });
        } else {
          this.estudianteServicio
            .actualizar(this.estudiante.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Estudiantes',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/dashboard/estudiantes']);
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
