import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private router: Router, private route: ActivatedRoute) {}

  email="";
  password="";
  // User=new User(this.email,this.password);

  login() {
    // if (!this.email || !this.password) {
    //   // Handle form validation here
    //   return;
    // }
    // console.log(this.User);
    this.router.navigateByUrl('/allBooks');
  }

}
