import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { InfoComponent } from './info/info.component';
import { DivisionOneComponent } from './Bases/division-one/division-one.component';
import { FooterComponent } from './footer/footer.component';
import { DivsionSevenComponent } from './Bases/divsion-seven/divsion-seven.component';
import { DivsionEightComponent } from './Bases/divsion-eight/divsion-eight.component';
import { DivsionTwoComponent } from './Bases/divsion-two/divsion-two.component';
import { DivisionThreeComponent } from './Bases/division-three/division-three.component';
import { DivisionSixComponent } from './Bases/division-six/division-six.component';
import { DivisionEightyOneComponent } from './Bases/division-eighty-one/division-eighty-one.component';
import { DivisionEightySecondComponent } from './Bases/division-eighty-second/division-eighty-second.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowcaseComponent,
    InfoComponent,
    DivisionOneComponent,
    FooterComponent,
    DivsionSevenComponent,
    DivsionEightComponent,
    DivsionTwoComponent,
    DivisionThreeComponent,
    DivisionSixComponent,
    DivisionEightyOneComponent,
    DivisionEightySecondComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
