import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //login: boolean = false;
  persona = { email: '', password: ''}
  public user: string = "";
  public nombre: string = "";
  public email: string = "";

  constructor(private firestore: Firestore){
  }

  login(){
    let  col = collection(this.firestore, 'logins')
    addDoc(col, {fecha: new Date(), "person": this.persona})
  }

  //validarUsuario() {
  //  this.login = true;
  // }

  autocompletar() {
    this.persona.email = 'messi@gmail.com';
    this.persona.password = 'lionel';
    console.log(this.persona.email);
    console.log(this.persona.password);
  }

}
