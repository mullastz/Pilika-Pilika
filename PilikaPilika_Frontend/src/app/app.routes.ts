import { Routes } from '@angular/router';
import { SignUp } from './feature/auth/sign-up/sign-up';
import { LandingPage } from './feature/landing-page/landing-page';

export const routes: Routes = [
  { path: 'sign-up', component: SignUp },
  { path: '', component: LandingPage },
];
