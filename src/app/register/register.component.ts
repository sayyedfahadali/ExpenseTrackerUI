import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  username = '';
  password = '';
  role = 'USER';
  message = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  register() {
    this.userService.createUser(this.username, this.password, this.role)
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => this.message = err.error
      });
  }

}
