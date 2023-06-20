import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Auth,getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  esAdmin: boolean = false;
  auth: Auth = getAuth();
  usuario = this.auth.currentUser;
  backgroundColor = '#FFF5E4';
  prevBackgroundColor = '';
  color: string='';
  searchTerm: string='';
  filteredItems: { name: string, description: string }[] = [];

  items = [  { name: 'item 1', description: 'This is item 1' },  { name: 'item 2', description: 'This is item 2' },  { name: 'item 3', description: 'This is item 3' },  { name: 'item 4', description: 'This is item 4' },  { name: 'item 5', description: 'This is item 5' }];

  constructor(private UserService: UserService, private router: Router){

  }

  changeColor() {
    if (this.backgroundColor === '#FFF5E4') {
      this.prevBackgroundColor = this.backgroundColor;
      this.backgroundColor = '#850E35';
    } else {
      this.backgroundColor = this.prevBackgroundColor;
    }
    this.color = this.color === 'primary' ? 'accent' : 'primary';
  }

  validarusuario()
{
   onAuthStateChanged(this.auth, usuario =>{
      if (usuario){
        console.log('Usuario autenticado:', this.usuario);
      }
      if (!usuario){
        console.log('Usuario no identificado');
      }
   });

   this.validarusuario();

}
  ngOnInit() {
    const auth = getAuth();
  this.usuario = auth.currentUser;

  if (this.usuario) {
    // El usuario está autenticado, realiza las acciones necesarias
    console.log('Usuario autenticado:', this.usuario);
    
    // Verificar si el usuario es administrador
    // Aquí debes implementar la lógica para determinar si el usuario es administrador
    // En este ejemplo, asumimos que el usuario es administrador si su uid es "admin"
    this.esAdmin = this.usuario.uid === 'admin';
  } else {
    // El usuario no está autenticado
    console.log('Usuario no autenticado');
  }
  }
  

  // onSubmit() {
  //   const searchTerm = this.searchTerm.toLowerCase();

  //   this.filteredItems = this.items.filter(item => {
  //     const name = item.name.toLowerCase();
  //     const description = item.description.toLowerCase();

  //     return name.includes(searchTerm) || description.includes(searchTerm);
  //   });
  // }

  onClick(){
    this.UserService.logout()
    .then(() => {
      this.router.navigate(['/login'])
    })
    .catch(error => {
      console.log(error)
    })
  }
  
}
