import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

import { User } from '../../_models/User';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,PasswordModule,InputTextModule,FloatLabelModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email="";
  password="";

  User=new User(this.email,this.password);

  login() {
    console.log(this.User);
  }

}
