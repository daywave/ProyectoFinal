import { Component } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  video='4K6Sh1tsAW4';

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
