import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.sass'],
})
export class PortafolioComponent implements OnInit {
  activeSection: string = '';
  isCollapsedUno = true;
  isCollapsedDos = true;
  isCollapsedTres = true;
  isCollapsedCuatro = true;

  // Propiedades para controlar el giro de cada tarjeta
  flipCardOne: boolean = false;
  flipCardTwo: boolean = false;
  flipCardThree: boolean = false;
  flipCardFour: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Método para alternar el estado de colapso de las secciones
  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? '' : section;
  }

  // Método para alternar el colapso del contenido en las secciones
  toggleContent(section: string) {
    if (section === 'uno') {
      this.isCollapsedUno = !this.isCollapsedUno;
    } else if (section === 'dos') {
      this.isCollapsedDos = !this.isCollapsedDos;
    } else if (section === 'tres') {
      this.isCollapsedTres = !this.isCollapsedTres;
    } else if (section === 'cuatro') {
      this.isCollapsedCuatro = !this.isCollapsedCuatro;
    }
  }

  // Método para voltear las tarjetas
  flipCard(cardNumber: number): void {
    switch (cardNumber) {
      case 1:
        this.flipCardOne = !this.flipCardOne;
        break;
      case 2:
        this.flipCardTwo = !this.flipCardTwo;
        break;
      case 3:
        this.flipCardThree = !this.flipCardThree;
        break;
      case 4:
        this.flipCardFour = !this.flipCardFour;
        break;
      default:
        break;
    }
  }
  // Método para voltear las tarjetas
  flipCardAC(cardNumber: number): void {
    switch (cardNumber) {
      case 1:
        this.flipCardOne = !this.flipCardOne;
        break;
      default:
        break;
    }
  }
}
