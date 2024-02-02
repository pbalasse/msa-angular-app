import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  logged = false;
  iconColor = 'f7b32d';
  constructor(private router: Router) {}
  log() {
    if (this.logged == false) {
      this.router.navigate(['/login']);
      this.iconColor = 'lightgreen';
    } else {
      this.router.navigate(['/']);
      this.iconColor = '#f1c40f';
    }

    this.logged = !this.logged;
  }
}
