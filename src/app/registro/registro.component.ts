import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { LocalStorageService } from '../localstorage.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  nombre: string = "";
  correo: string = "";
  tel: string = "";
  fecha: string = "";
  habitacion: string = "";
  minDate: Date;

  constructor(private localStorageService: LocalStorageService) { 
    this.minDate = new Date();
  }

  guardarRegistro() {
    const registro = {
      nombre: this.nombre,
      correo: this.correo,
      tel: this.tel,
      fecha: this.fecha,
      habitacion: this.habitacion
    };

    // Validar la fecha antes de guardar el registro
    const registros = this.localStorageService.obtenerRegistros();
    const fechaExistente = registros.find(reg => reg.fecha === registro.fecha);
    if (fechaExistente) {
      // Mostrar mensaje de error o realizar alguna acción
      Swal.fire({
        icon: 'error',
        title: 'La fecha ya existe en los registros.',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    this.localStorageService.guardarRegistro(registro);

    Swal.fire({
      icon: 'success',
      title: '¡Registro guardado!',
      showConfirmButton: false,
      timer: 1500
    });

    // Limpiar los campos del formulario después de guardar el registro
    this.nombre = "";
    this.correo = "";
    this.tel = "";
    this.fecha = "";
    this.habitacion = "";
  }
}

