import { PersonasComponent } from './Components/vistas/personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './Components/vistas/editar/editar.component';
import { LoginComponent } from './Components/vistas/login/login.component';
import { NuevoComponent } from './Components/vistas/nuevo/nuevo.component';
import { PrincipalComponent } from './Components/vistas/principal/principal.component';

const routes: Routes =
[
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login', 
    component: LoginComponent 
  },
  {
    path:'principal', 
    component: PrincipalComponent 
  },
  {
    path:'nuevo', 
    component: NuevoComponent 
  },
  {
    path:'editar', 
    component: EditarComponent 
  },
  {
    path:'personas', 
    component: PersonasComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
[
  PersonasComponent,
  LoginComponent,
  PrincipalComponent,
  NuevoComponent,
  EditarComponent
]
