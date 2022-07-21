import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GeneralComponent } from './general/general.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'proyecto', component: ProyectosComponent },
     
      { path: '**', redirectTo: 'general' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
