import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';
  loginSuccess = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const result = this.authService.login(this.username, this.password);
    this.loginSuccess = result.success;
    this.message = result.message;

    console.log(this.message)
    if (result.success) {
      localStorage.setItem('userToken', 'someToken');
      this.router.navigate(['/home']);
    }
  }
}
