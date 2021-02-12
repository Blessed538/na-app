import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionOneComponent } from './Bases/division-one/division-one.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FooterComponent } from './footer/footer.component';
import { DivsionEightComponent } from './Bases/divsion-eight/divsion-eight.component';
import { DivsionSevenComponent } from './Bases/divsion-seven/divsion-seven.component';
import { DivisionSixComponent } from './Bases/division-six/division-six.component';
import { DivisionEightyOneComponent } from './Bases/division-eighty-one/division-eighty-one.component';
import { DivisionEightySecondComponent } from './Bases/division-eighty-second/division-eighty-second.component';
import { DivisionThreeComponent } from './Bases/division-three/division-three.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShowcaseComponent },
  { path: 'division-one', component: DivisionOneComponent },
  { path: 'division-two', component: DivisionOneComponent },
  { path: 'division-eight', component: DivsionEightComponent },
  { path: 'division-eighty-one', component: DivisionEightyOneComponent },
  { path: 'division-eighty-second', component: DivisionEightySecondComponent },
  { path: 'division-six', component: DivisionSixComponent },
  { path: 'division-seven', component: DivsionSevenComponent },
  { path: 'division-three', component: DivisionThreeComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
