import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { CreenciasComponent } from './creencias/creencias.component';
import { ContribuirComponent} from './contribuir/contribuir.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'creencias', component:CreenciasComponent},
  {path: 'contribute', component: ContribuirComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
