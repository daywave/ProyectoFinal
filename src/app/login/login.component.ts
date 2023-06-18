import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(private userService: UserService, private router:Router){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void{
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(Response => {
      console.log("iniciado con exito");
      console.log(Response);
      this.router.navigate(['/main'])
    })
    .catch(error => console.log(error))
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(Response =>{
      console.log("iniciado con exito");
      console.log(Response);
      this.router.navigate(['/main'])
    })
    .catch(error => {
      console.log("nada");
      console.log(error)
    })
  }
}
