import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "../../service/usuario.service"; // CRUD services API
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms"; // Reactive form services
import { ToastrService } from "ngx-toastr"; // Alert message using NGX toastr

@Component({
  selector: "app-usuario-form",
  templateUrl: "./usuario-form.component.html"
})
export class AddUsuarioComponent implements OnInit {
  public hospedeForm: FormGroup;

  constructor(
    public crudApi: UsuarioService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    this.createuserForm();
  }

  createuserForm() {
    this.hospedeForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(2)]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ]
      ],
      celular: ["", [Validators.required, Validators.pattern("^[0-9]+$")]]
    });
  }

  get nome() {
    return this.hospedeForm.get("nome");
  }

   

  get celular() {
    return this.hospedeForm.get("celular");
  }

  get email() {
    return this.hospedeForm.get("email");
  }

  save() {
    this.crudApi.addUsuario(this.hospedeForm.value);
    this.toastr.success(
      this.hospedeForm.controls["nome"].value + " cadastrado com sucesso!"
    );
    this.hospedeForm.reset();
  }
}
