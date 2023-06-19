import { Component } from '@angular/core';
import { getDatabase, ref, onValue } from 'firebase/database';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  citas: any[] = [];
  private db = getDatabase();

  constructor() { }

  ngOnInit(): void {
    const citasRef = ref(this.db, 'citas');
    onValue(citasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertir los datos en un arreglo de citas
        this.citas = Object.values(data);
      } else {
        this.citas = [];
      }
    });
  }
}
