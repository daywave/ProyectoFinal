import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { Auth, RecaptchaVerifier, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  phoneNumber: string = "";
  verificationCode: string ="";
  auth: Auth = getAuth();
  recaptchaVerifier!:RecaptchaVerifier;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    }, this.auth);
  }

  sendSMSVerificationCode() {
    this.userService.enviarCodigoSMS(this.phoneNumber, this.recaptchaVerifier)
      .then(() => {
        console.log("Numero enviado correctamente")
      })
      .catch((error: any) => {
        console.log("Fallo al enviar el codigo")
      });
  }

  verifySMSCode() {
    this.userService.verificarCodigoSMS(this.verificationCode)
      .then((user: any) => {
        if (user) {
          console.log(user)
          this.router.navigate(['/login'])
        } else {
          console.error('Error al verificar el código SMS');
        }
      })
      .catch((error: any) => {
        console.error('Error al verificar el código SMS', error);
      });
  }
}
