import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { InfoComponent } from './info/info.component';
import { DivisionOneComponent } from './Bases/division-one/division-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowcaseComponent,
    InfoComponent,
    DivisionOneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
