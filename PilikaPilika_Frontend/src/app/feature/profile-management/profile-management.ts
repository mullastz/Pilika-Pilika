import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-management',
  imports: [],
  templateUrl: './profile-management.html',
  styleUrl: './profile-management.css',
})
export class ProfileManagement {
  constructor(private location: Location) {}

  goBack() {
  if (window.history.length > 1) {
    this.location.back();
  } else {
    // fallback route (example: home)
    // inject Router if needed
  }
}
}
