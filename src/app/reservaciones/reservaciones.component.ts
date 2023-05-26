import { Component } from '@angular/core';
import { LocalStorageService } from '../localstorage.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {
  registros: any[] = [];

  constructor(private localStorageService: LocalStorageService) {
    this.registros = this.localStorageService.obtenerRegistros();
  }
}