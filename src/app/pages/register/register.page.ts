import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async onRegister() {
    this.errorMessage = '';
    try {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      // Redirige al login después de registrarse
      this.router.navigate(['/login']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}