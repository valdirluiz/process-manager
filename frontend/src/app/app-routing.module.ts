import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUsuarioComponent } from "./usuarios/usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./usuarios/usuarios-list/usuario-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/visualizar-usuarios', pathMatch: 'full' },
  { path: 'registrar-usuario', component: AddUsuarioComponent },
  { path: 'visualizar-usuarios', component: UsuarioListComponent },
   
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
