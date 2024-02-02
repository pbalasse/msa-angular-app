import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  logged = false;
  iconColor = 'darkOrange';
  log() {
    this.logged == false
      ? (this.iconColor = 'lightgreen')
      : (this.iconColor = 'darkorange');
    this.logged = !this.logged;
  }
}
