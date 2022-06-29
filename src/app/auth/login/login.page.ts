import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService) { }
  email:string;
  password:string;

  ngOnInit() {

  }

  login() {
    this.authService.loginWithEmailAndPassword(this.email,this.password)
  }

}
