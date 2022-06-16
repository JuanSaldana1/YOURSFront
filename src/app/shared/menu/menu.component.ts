import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public links: Array<{text: string; path: string; icon: string}> = [
    {text: 'Home', path: '/', icon: 'house'},
    {text: 'About', path: '/about', icon: 'info-circle'},
    {text: 'Contact', path: '/contact', icon: 'person'},
    {text: 'Login', path: '/auth', icon: 'box-arrow-in-right'},
    {text: 'Dashboard', path: '/dashboard', icon: 'speedometer2'},
    {text: 'Profile', path: '/profile', icon: 'person'},
    {text: 'Settings', path: '/settings', icon: 'gear'},
    {text: 'Logout', path: '/logout', icon: 'box-arrow-right'},
  ];
  constructor() {}

  ngOnInit(): void {}
}
