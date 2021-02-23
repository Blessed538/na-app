import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sidebarIsOpen = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    const sidebar: HTMLElement = document.getElementById(
      'container'
    ) as HTMLElement;
    if (this.sidebarIsOpen) {
      sidebar.classList.remove('mainnav-in');
      sidebar.classList.add('mainnav-out');
    } else {
      sidebar.classList.remove('mainnav-out');
      sidebar.classList.add('mainnav-in');
    }
    this.sidebarIsOpen = !this.sidebarIsOpen;
  }
}
