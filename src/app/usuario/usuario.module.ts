import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TallerComponent } from './taller/taller.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    FormularioComponent,
    AsistenciaComponent,
    NavComponent,
    FooterComponent,
    TallerComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UsuarioModule {}
