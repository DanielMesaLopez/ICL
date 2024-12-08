import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortafolioComponent } from 'src/app/ui/portafolio/portafolio.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/ui/footer/footer.component';
import { HeaderComponent } from 'src/app/ui/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FloatingButtonsComponent } from 'src/app/ui/floating-buttons/floating-buttons.component';

const componentes = [
  FooterComponent,
  HeaderComponent,
  PortafolioComponent,
  FloatingButtonsComponent,
];

@NgModule({
  declarations: [componentes],
  exports: [componentes],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'portafolio',
        component: PortafolioComponent,
      },
    ]),
  ],
  bootstrap: [PortafolioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortafolioModule {}
