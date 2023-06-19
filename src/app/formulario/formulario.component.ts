import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  cita: any = {};
  minDate: string; 

  constructor(private userService: UserService, private router: Router) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
   }

  ngOnInit(): void {
  }

  guardarCita() {
    this.userService.guardarCita(this.cita)
      .then(() => {
        console.log('Cita guardada');
        this.router.navigate(['/reservaciones']);
      })
      .catch((error: any) => {
        console.error('Error al guardar la cita', error);
      });
  }
}
