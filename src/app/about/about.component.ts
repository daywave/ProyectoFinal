import { Component } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
  }

  Hablar(){

    const X = document.getElementById('Titulo')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X));

    const X1 = document.getElementById('Contenido')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X1));

    const X2 = document.getElementById('Contenido2')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X2));

  }

  Pausar(){

    speechSynthesis.pause();

  }

  Resumen(){

    speechSynthesis.resume();

  }

  // CONTRASTE DE ENLACES -----------------------------------------------------------------------------------------------

  EnlacesB(){

    const X = document.getElementById('Enlace') as HTMLAnchorElement;
    const X2 = document.getElementById('Enlace2') as HTMLAnchorElement;
    const X3 = document.getElementById('Enlace3') as HTMLAnchorElement;

    X.style.backgroundColor = 'black';
    X.style.color = 'yellow';

    X2.style.backgroundColor = 'black';
    X2.style.color = 'yellow';

    X3.style.backgroundColor = 'black';
    X3.style.color = 'yellow';
  }

  EnlacesA(){

    const X = document.getElementById('Enlace') as HTMLAnchorElement;
    const X2 = document.getElementById('Enlace2') as HTMLAnchorElement;
    const X3 = document.getElementById('Enlace3') as HTMLAnchorElement;

    X.style.backgroundColor = 'white';
    X.style.color = 'blue';

    X2.style.backgroundColor = 'white';
    X2.style.color = 'blue';

    X3.style.backgroundColor = 'white';
    X3.style.color = 'blue';

  }

  // CONTRASTE DE PAGINA -----------------------------------------------------------------------------------------------

  ContrasteA(){

    const X = document.getElementById('Cuerpo') as HTMLBodyElement;

    X.style.backgroundColor = 'black';
    X.style.color = 'yellow';
  }

  ContrasteB(){

    const X = document.getElementById('Cuerpo') as HTMLBodyElement;

    X.style.backgroundColor = 'white';
    X.style.color = 'black';
  }

  // CAMBIO DE ZOOM ----------------------------------------------------------------------------------------------------

  ZoomMas(){

    var I = 3;
    var TAM = new Array ('xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large');
    const X = document.getElementById('Cuerpo') as HTMLDivElement;

    X.style.fontSize = TAM[I+2];
    
  }

  ZoomMenos(){

    var I = 3;
    var TAM = new Array ('xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large');
    const X = document.getElementById('Cuerpo') as HTMLDivElement;
  
    X.style.fontSize = TAM[I-2];
    
  }

  ZoomNormal(){

    var I = 3;
    var TAM = new Array ('xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large');
    const X = document.getElementById('Cuerpo') as HTMLDivElement;
  
    X.style.fontSize = TAM[I];
    
  }
}
