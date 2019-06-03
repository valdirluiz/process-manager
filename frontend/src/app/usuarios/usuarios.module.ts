import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddUsuarioComponent } from "./usuario-form/usuario-form.component";
import { UsuarioListComponent } from "./usuarios-list/usuario-list.component";

import { AppRoutingModule } from "../app-routing.module";
 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AddUsuarioComponent, 
    UsuarioListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
   ]
})
export class UsuariosModule {}
