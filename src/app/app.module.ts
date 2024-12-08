import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioModule } from './modules/portafolio/portafolio.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    PortafolioModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
