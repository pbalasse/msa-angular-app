import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-continuous',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './continuous.component.html',
  styleUrl: './continuous.component.css',
})
export class ContinuousComponent {}
