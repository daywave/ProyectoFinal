import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Auth,getAuth } from '@angular/fire/auth';
import { firebaseApp$ } from '@angular/fire/app';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  auth: Auth = getAuth();
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

  // ngOnInit() {
    
  //   this.auth.authState.subscribe(user => {
  //     if (user) {
  //       // El usuario está logeado
  //       console.log('Usuario logeado:', user);
  //       this.isLoggedIn = true;
  //       this.isAdmin = user.role === 'admin';
  //     } else {
  //       // El usuario no está logeado
  //       console.log('Usuario no logeado');
  //       this.isLoggedIn = false;
  //       this.isAdmin = false;
  //     }
  //   });
  // }
  

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
