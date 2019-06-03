import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: "app-hospede-list",
  templateUrl: "./usuario-list.component.html"
})
export class UsuarioListComponent implements OnInit {
  p: number = 1;
  usuarios: any[];
  hideWhenNoUsuario: boolean = true;
  noData: boolean = true;
  preLoader: boolean = true;

  constructor( public toastr: ToastrService, private http: HttpClient) {}

  ngOnInit() {
    console.log("usuarios")
    
  }

  

  deleteHospede(hospede) {
    if (window.confirm("Confirmar remoção?")) {
      
      this.toastr.success(hospede.nome + " removido!");
    }
  }
}
