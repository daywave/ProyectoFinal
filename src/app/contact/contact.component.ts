import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  forma: FormGroup;
  usuario:any={
    nombre:"",
    apellido:"",
    correo:"" }

  constructor(){
    this.forma = new FormGroup({
      'nombre': new FormControl(this.usuario.nombre, [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl(this.usuario.apellido, Validators.required),
      'correo': new FormControl(this.usuario.correo, [Validators.required,Validators.email])
    });
  }

  guardarCambios(): void{
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);
  }
}