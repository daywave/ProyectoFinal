import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
<<<<<<< Updated upstream
  forma: FormGroup;
  usuario:any={
    nombre:"",
    apellido:"",
    correo:"" }

=======
<<<<<<< HEAD
  constructor() {}

  handleSubmit(event: Event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
  
    // Obtiene los valores de los campos del formulario
    const name = (<HTMLInputElement>document.querySelector('input[name="name"]')).value;
    const email = (<HTMLInputElement>document.querySelector('input[name="email"]')).value;
    const number = (<HTMLInputElement>document.querySelector('input[name="number"]')).value;
    const msg = (<HTMLInputElement>document.querySelector('textarea[name="msg"]')).value;
  
    // Crea un objeto con los datos del formulario
    const data = {
      name: name,
      email: email,
      number: number,
      msg: msg
    };
  
    // Realiza la petición POST utilizando Fetch
    fetch("URL_DEL_ENDPOINT_DEL_SERVIDOR", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Maneja la respuesta del servidor
        console.log(result);
        // Puedes mostrar un mensaje de éxito o redirigir a otra página aquí
      })
      .catch(error => {
        // Maneja los errores de la petición
        console.error(error);
        // Puedes mostrar un mensaje de error aquí
      });
=======
  forma: FormGroup;
  usuario:any={
    nombre:"",
    apellido:"",
    correo:"" }

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
>>>>>>> pichus
>>>>>>> Stashed changes
  }
}
