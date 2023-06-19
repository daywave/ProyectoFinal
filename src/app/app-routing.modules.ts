import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HabitacionListComponent } from './habitacion-list/habitacion-list.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ContactComponent } from './contact/contact.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import { SmsComponent } from './sms/sms.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sms', component: SmsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'registro', component: FormularioComponent },
    { path: 'reservaciones', component: ListaComponent },
    { path: 'galeria', component: GaleriaComponent},
    { path: 'habitacion-list', component: HabitacionListComponent},
    { path: 'habitacion/:habitacion', component: HabitacionesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }