import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Portafolio';

  constructor(private modalService: NgbModal) {}
  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
