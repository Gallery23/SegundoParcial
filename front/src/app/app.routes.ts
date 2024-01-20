import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { EstudiantesComponent } from './views/estudiantes/estudiantes.component';
import { MateriaComponent } from './views/materias/materias.component';
import { NuevoEstudianteComponent } from './views/estudiantes/nuevo-estudiante/nuevo-estudiante.component';
import { NuevoMateriaComponent } from './views/materias/nuevo-materia/nuevo-materia.component';
/*import { NuevoStockComponent } from './views/stocks/nuevo-stocks/nuevo-stocks.component';
*/

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'estudiantes',
    title: 'frm_Estudiantes',
    component: EstudiantesComponent,
  },
  {
    path: 'nuevo-estudiante',
    title: 'frm_Nuevo_Estudiante',
    component: NuevoEstudianteComponent,
  },
  {
    path: 'editar-estudiante/:id',
    title: 'frm Editar Estudiante',
    component: NuevoEstudianteComponent,
  },
  {
    path: 'materias',
    title: 'frm Materias',
    component: MateriaComponent,
  },
  {
    path: 'nuevo-materia',
    title: 'frm Nuevo Materia',
    component: NuevoMateriaComponent,
  },
  {
    path: 'editar-materia/:id',
    title: 'frm Editar Materia',
    component: NuevoMateriaComponent,
  },
  
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];
