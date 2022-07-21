import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GeneralComponent } from './general/general.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CrearProyComponent } from './crear-proy/crear-proy.component';
import { DetallProyComponent } from './detall-proy/detall-proy.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AdminComponent,
    GeneralComponent,
    ProyectosComponent,
    CrearProyComponent,
    DetallProyComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
