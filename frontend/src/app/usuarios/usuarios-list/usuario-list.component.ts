import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/usuario.service"; // CRUD services API
 import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-hospede-list",
  templateUrl: "./usuario-list.component.html"
})
export class UsuarioListComponent implements OnInit {
  p: number = 1;
  usuarios: any[];
  hideWhenNoUsuario: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: UsuarioService, public toastr: ToastrService) {}

  ngOnInit() {
    console.log("usuarios")
  }

  

  deleteHospede(hospede) {
    if (window.confirm("Confirmar remoção?")) {
      
      this.toastr.success(hospede.nome + " removido!");
    }
  }
}
