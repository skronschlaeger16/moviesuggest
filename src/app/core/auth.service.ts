import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginPage } from '../auth/login/login.page';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  loginWithEmailAndPassword(email, password) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Logged in Successfully');
      })
      .catch((err) => {
        console.log('Something went wrong: ', err.message);
      });
  }

  registerWithEmailAndPassword(username, email, password) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Created User: ', value);
      })
      .catch((err) => {
        console.log('Something went wrong: ', err);
      });
  }

  logout(){
    this.afAuth.signOut()
    .then(() => {
      console.log('Logged out Successfully!');
    })
    .catch((err) => {
      console.log('Something went wrong: ', err);
    });
  }

  GoogleAuth(){
    return this.loginWithGoogle(new GoogleAuthProvider());
  }

  loginWithGoogle(provider:GoogleAuthProvider) {
    this.afAuth
        .signInWithPopup(provider)
        .then((result) => {
          console.log('Successfully logged in');
          console.log(result);

        })
        .catch((err) => {
          console.log('Something went wrong: ', err);
        });
  }
}
