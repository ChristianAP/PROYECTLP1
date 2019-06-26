import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarloginComponent } from './components/navbarlogin/navbarlogin.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AempleadoComponent } from './components/aempleado/aempleado.component';



const routes: Routes = [
  {path:"",  redirectTo:"/navbarlogin", pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {path:"menu", component: MenuComponent},
  {path:"usuarios", component: UsuariosComponent},
  {path:"navbarlogin", component: NavbarloginComponent},
  {path:"asistencia", component: AsistenciaComponent},
  {path:"aempleado", component: AempleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
