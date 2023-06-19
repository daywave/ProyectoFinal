import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber } from '@angular/fire/auth';
import { ConfirmationResult, RecaptchaVerifier } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { getDatabase,get, ref, push, equalTo, orderByChild, query, DataSnapshot, startAt, endAt } from 'firebase/database';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private confirmationResult: ConfirmationResult | null = null;
  private db = getDatabase();

  constructor(private auth: Auth) {
    /*const firebaseConfig = {
      projectId: 'pytowebangular',
    appId: '1:878131864286:web:76ba22bf05d23be7d6184f',
    storageBucket: 'pytowebangular.appspot.com',
    apiKey: 'AIzaSyDfKlJmsv7MyzYm1L84iUMpeCVNopi7uEM',
    authDomain: 'pytowebangular.firebaseapp.com',
    messagingSenderId: '878131864286',
    measurementId: 'G-MCR5ETW79L',
    };

    const app = initializeApp(firebaseConfig);*/

   
    this.confirmationResult = null;
  }
  
  async guardarCita(cita: any) {
    const citasRef = ref(this.db, 'citas');
  
    if (!cita.hora) {
      throw new Error('La cita debe tener una fecha y hora');
    }
  
    const citasQuery = query(
      citasRef,
      orderByChild('hora'),
      equalTo(cita.hora)
    );
  
    try {
      const snapshot = await get(citasQuery);
  
      if (snapshot.exists()) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Fecha y hora no disponibles',
        });
        throw new Error('La cita ya existe');
      } else {
        return push(citasRef, cita);
      }
    } catch (error) {
      console.error('Error al guardar la cita', error);
      throw error;
    }
  }

  registrar({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  enviarCodigoSMS(numeroTelefono: string, recaptchaVerifier: RecaptchaVerifier) {
    return signInWithPhoneNumber(this.auth, numeroTelefono, recaptchaVerifier)
      .then((confirmationResult: ConfirmationResult) => {
        this.confirmationResult = confirmationResult;
      })
      .catch((error: any) => {
        console.error('Error al enviar el código SMS', error);
      });
  }

  verificarCodigoSMS(codigo: string) {
    if (!this.confirmationResult) {
      console.error('No se ha enviado ningún código de verificación SMS');
      return Promise.reject('No se ha enviado ningún código de verificación SMS');
    }
    return this.confirmationResult.confirm(codigo)
      .then((result: any) => {
        return result.user;
      })
      .catch((error: any) => {
        console.error('Error al verificar el código SMS', error);
      });
  }

  logout() {
    return signOut(this.auth);
  }
}
