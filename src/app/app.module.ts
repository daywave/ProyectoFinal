import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetComponent } from './sweet/sweet.component';
import { HabitacionListComponent } from './habitacion-list/habitacion-list.component';
import { FormsModule } from '@angular/forms'; // importa el módulo FormsModule
import { HabitacionService } from './habitacion.service';
import { CommentsComponent } from './comments/comments.component';
import { LocalStorageService } from './localstorage.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { VideoPipe } from './video.pipe';
import { MasonrryComponent } from './masonrry/masonrry.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { MapboxComponent } from './mapbox/mapbox.component';
import { TablaComponent } from './tabla/tabla.component';
import { MatSelectModule } from '@angular/material/select';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ContactComponent } from './contact/contact.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SmsComponent } from './sms/sms.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { ListaComponent } from './lista/lista.component';
import { UserService } from './user.service';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [			
    AppComponent,
    RegistroComponent,
    HomeComponent,
    AboutComponent,
    ReservacionesComponent,
    GaleriaComponent,
    HeaderComponent,
    SweetComponent,
      HabitacionListComponent,
      CommentsComponent,
      VideoPipe,MasonrryComponent,
      MapboxComponent,
      TablaComponent,
      HabitacionesComponent,
      ContactComponent,
      QuestionsComponent,
      LoginComponent,
      SmsComponent,
      ListaComponent,
      FormularioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMasonryModule,
    CommonModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [HabitacionService,LocalStorageService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
