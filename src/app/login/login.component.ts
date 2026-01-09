import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
  console.log('Login button clicked');
  console.log('Username:', this.username);
  console.log('Password:', this.password);
  this.authService.login(this.username, this.password)
    .subscribe({
      next: () => {
        console.log('Login response');
        console.log('JWT stored:', localStorage.getItem('jwt'));
        this.router.navigate(['/home']);
      },
      error: err => {
        console.error('Login failed', err);
      }
    });
}
}
