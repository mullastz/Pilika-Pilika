import { Routes } from '@angular/router';
import { SignUp } from './feature/auth/sign-up/sign-up';
import { LandingPage } from './feature/landing-page/landing-page';
import { ProfileManagement } from './feature/profile-management/profile-management';

export const routes: Routes = [
  { path: 'sign-up', component: SignUp },
  { path: '', component: LandingPage },
  { path: 'profile-management', component: ProfileManagement },
];
