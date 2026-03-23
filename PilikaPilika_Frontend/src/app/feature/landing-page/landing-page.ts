import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [ CommonModule ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})

export class LandingPage {

    isDark = false;

  ngOnInit() {
    const saved = localStorage.getItem('theme');

    this.isDark = saved === 'dark';

    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');

    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

activities = [
  { icon: 'fa-solid fa-user', label: 'Become Agent' },
  { icon: 'fa-solid fa-qrcode', label: 'Generate QRcode' },
  { icon: 'fa-solid fa-magnifying-glass', label: 'Search Agent' },
  { icon: 'fa-solid fa-location-crosshairs', label: 'Track Shipping' },
  { icon: 'fa-solid fa-handshake', label: 'Negotiate' },
];

agents = [
  {
    name: 'Juma Bakari',
    rating: 4.9,
    location: 'Wang Zu, China',
    price: '$ 20 / 1kg',
    image: 'assets/landingpage_images/profile4.jpg'
  },
  {
    name: 'Juma Bakari',
    rating: 4.9,
    location: 'Wang Zu, China',
    price: '$ 20 / 1kg',
    image: 'assets/landingpage_images/profile4.jpg'
  },  
  {
    name: 'Juma Bakari',
    rating: 4.9,
    location: 'Wang Zu, China',
    price: '$ 20 / 1kg',
    image: 'assets/landingpage_images/profile4.jpg'
  },  
  {
    name: 'Juma Bakari',
    rating: 4.9,
    location: 'Wang Zu, China',
    price: '$ 20 / 1kg',
    image: 'assets/landingpage_images/profile4.jpg'
  },  
  {
    name: 'Juma Bakari',
    rating: 4.9,
    location: 'Wang Zu, China',
    price: '$ 20 / 1kg',
    image: 'assets/landingpage_images/profile4.jpg'
  },  
  {
    name: 'Juma Bakari',
    rating: 4.9,
    location: 'Wang Zu, China',
    price: '$ 20 / 1kg',
    image: 'assets/landingpage_images/profile4.jpg'
  },
]; 

topAgents = [...this.agents];

testimonials = [
  {
    name: 'Andra',
    city: 'Dar-es-salaam',
    message: 'The tracking updates gave me full confidence.',
    avatar: 'assets/landingpage_images/profile1.webp'
  },
  {
    name: 'Andra',
    city: 'Dar-es-salaam',
    message: 'The tracking updates gave me full confidence.',
    avatar: 'assets/landingpage_images/profile1.webp'
  },  
  {
    name: 'Andra',
    city: 'Dar-es-salaam',
    message: 'The tracking updates gave me full confidence.',
    avatar: 'assets/landingpage_images/profile1.webp'
  },  
  {
    name: 'Andra',
    city: 'Dar-es-salaam',
    message: 'The tracking updates gave me full confidence.',
    avatar: 'assets/landingpage_images/profile1.webp'
  },  
  {
    name: 'Andra',
    city: 'Dar-es-salaam',
    message: 'The tracking updates gave me full confidence.',
    avatar: 'assets/landingpage_images/profile1.webp'
  },  
  {
    name: 'Andra',
    city: 'Dar-es-salaam',
    message: 'The tracking updates gave me full confidence.',
    avatar: 'assets/landingpage_images/profile1.webp'
  },
];
}
