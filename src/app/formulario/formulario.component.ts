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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarCita() {
    this.userService.guardarCita(this.cita)
      .then(() => {
        console.log('Cita guardada');
        this.router.navigate(['/usuarios']);
      })
      .catch((error: any) => {
        console.error('Error al guardar la cita', error);
      });
  }
}
