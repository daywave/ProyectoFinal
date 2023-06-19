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

    const X = document.getElementById('1')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X));

    const X1 = document.getElementById('2')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X1));

    const X2 = document.getElementById('3')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X2));

    const X3 = document.getElementById('4')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X3));

    const X4 = document.getElementById('5')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X4));

    const X5 = document.getElementById('6')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X5));

    const X6 = document.getElementById('7')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X6));

    const X7 = document.getElementById('8')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X7));

    const X8 = document.getElementById('9')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X8));

    const X9 = document.getElementById('10')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X9));

    const X10 = document.getElementById('11')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X10));

    const X11 = document.getElementById('12')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X11));

    const X12 = document.getElementById('13')?.innerHTML;
    speechSynthesis.speak(new SpeechSynthesisUtterance(X12));

  }

  Pausar(){

    speechSynthesis.pause();

  }

  Resumen(){

    speechSynthesis.resume();

  }

  // CONTRASTE DE ENLACES -----------------------------------------------------------------------------------------------

  EnlacesB(){

    const X = document.getElementById('A1') as HTMLAnchorElement;

    X.style.backgroundColor = 'black';
    X.style.color = 'yellow';

  }

  EnlacesA(){

    const X = document.getElementById('A1') as HTMLAnchorElement;

    X.style.backgroundColor = 'white';
    X.style.color = 'blue';

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
