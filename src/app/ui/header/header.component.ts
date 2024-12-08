import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  currentSlide = 0;
  menuActive = false; // Controla la visibilidad del menú

  constructor() {}

  ngOnInit(): void {}

  // Función para alternar la visibilidad del menú
  toggleMenu(): void {
    this.menuActive = !this.menuActive;
    const nav = document.querySelector('.navigation') as HTMLElement;
    if (this.menuActive) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  }
}
