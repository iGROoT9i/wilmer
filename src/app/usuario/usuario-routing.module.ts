import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TallerComponent } from './taller/taller.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent ,children:[
    { path: 'home', component: HomeComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'taller', component: TallerComponent },
    { path: 'asistencia', component: AsistenciaComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'home',
    },
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
