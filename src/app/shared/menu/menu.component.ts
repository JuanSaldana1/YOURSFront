import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public links: Array<{ text: string, path: string }> = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
    { text: 'Login', path: '/login' },
    { text: 'Register', path: '/register' },
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Profile', path: '/profile' },
    { text: 'Settings', path: '/settings' },
    { text: 'Logout', path: '/logout' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
