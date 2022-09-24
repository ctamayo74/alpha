import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreenciasComponent } from './creencias/creencias.component';
import { ContribuirComponent } from './contribuir/contribuir.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    CreenciasComponent,
    ContribuirComponent,
    MiembrosComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
