import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import { AboutComponent} from './about/about.component';
import { CreenciasComponent } from './creencias/creencias.component';
import { ContribuirComponent} from './contribuir/contribuir.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'about', component:AboutComponent},
  {path: 'creencias', component:CreenciasComponent},
  {path: 'contribute', component: ContribuirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
