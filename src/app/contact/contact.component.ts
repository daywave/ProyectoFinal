import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  forma: FormGroup;
  usuario: any = {
    nombre: "",
    apellido: "",
    correo: ""
  };

  constructor() {}

  ngOnInit(): void {
    this.forma = new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      correo: new FormControl("", [Validators.required, Validators.email])
    });
  }

  guardarCambios(): void {
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
  }
}
