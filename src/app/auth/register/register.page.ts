import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService) { }
  username:string;
  email:string;
  password:string;
  ngOnInit() {
  }

  register() {
    this.authService.registerWithEmailAndPassword(this.username,this.email,this.password);
  }

}
