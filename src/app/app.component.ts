import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  logout() {
    // Suppression des informations de session
    localStorage.removeItem('userToken');
    // Redirection vers la page de login
    this.router.navigate(['/login']);
  }
}
