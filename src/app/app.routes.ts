import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContinuousComponent } from './pages/continuous/continuous.component';
import { DiscreteComponent } from './pages/discrete/discrete.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'continuous', component: ContinuousComponent },
  { path: 'discrete', component: DiscreteComponent },
  { path: 'login', component: LoginComponent },
];
