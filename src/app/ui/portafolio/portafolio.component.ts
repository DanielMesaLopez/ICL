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

  constructor() {}

  ngOnInit(): void {}

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? '' : section;
  }

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
}
