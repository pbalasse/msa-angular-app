import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContinuousComponent } from './pages/continuous/continuous.component';
import { DiscreteComponent } from './pages/discrete/discrete.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'continuous', component: ContinuousComponent },
  { path: 'discrete', component: DiscreteComponent },
];
