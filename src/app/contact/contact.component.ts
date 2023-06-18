import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  forma: FormGroup;
  usuario: any = {
    nombre: "",
    apellido: "",
    correo: ""
  };

  constructor(private http: HttpClient) {
    this.forma = new FormGroup({
      'nombre': new FormControl(this.usuario.nombre, [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl(this.usuario.apellido, Validators.required),
      'correo': new FormControl(this.usuario.correo, [Validators.required, Validators.email])
    });
  }

  guardarCambios(): void {
    console.log("metodo guardarCambios");
    console.log(this.forma);
    console.log(this.forma.value);

    const formData = {
      name: "FormSubmit",
      message: "I'm from Devro LABS"
    };

    this.http.post('http://localhost:3000/reservaciones', formData)
      .subscribe(response => {
        console.log(response);
          console.log("Todo salió bien");
      }, error => {
        console.error(error);
        console.log("Hubo un error en la comunicación");
      });
  }
}
