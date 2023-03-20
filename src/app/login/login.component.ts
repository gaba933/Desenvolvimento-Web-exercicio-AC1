import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string="";
  senha: string="";

  onSubmit(): void{

  } 

  constructor(private router: Router) { }

  verifica(){
    if(this.usuario == "admin" && this.senha == "123"){
      this.router.navigate(['/menu'])
    } else{
      this.router.navigate(['/footer'])
    }
  }
}
