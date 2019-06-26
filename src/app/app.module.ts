import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarloginComponent } from './components/navbarlogin/navbarlogin.component';
import { MenupriComponent } from './components/menupri/menupri.component';
import { PagpriComponent } from './components/pagpri/pagpri.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { AempleadoComponent } from './components/aempleado/aempleado.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NavbarComponent,
    UsuariosComponent,
    NavbarloginComponent,
    MenupriComponent,
    PagpriComponent,
    AsistenciaComponent,
    AempleadoComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
