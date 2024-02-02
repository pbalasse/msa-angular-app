import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leftbar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.css',
})
export class LeftbarComponent {
  drawerWidth = 150; /* largeur du drawer*/
  margin = -this.drawerWidth; /* marge à gauche calculée */
  toggle() {
    this.margin == -this.drawerWidth
      ? (this.margin = 0)
      : (this.margin = -this.drawerWidth);
  }
}
