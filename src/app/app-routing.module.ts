import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionOneComponent } from './Bases/division-one/division-one.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { FooterComponent } from './footer/footer.component';
import { DivsionEightComponent } from './Bases/divsion-eight/divsion-eight.component';
import { DivsionSevenComponent } from './Bases/divsion-seven/divsion-seven.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ShowcaseComponent },
  { path: 'division-one', component: DivisionOneComponent },
  { path: 'division-two', component: DivisionOneComponent },
  { path: 'division-eight', component: DivsionEightComponent },
  { path: 'division-Seven', component: DivsionSevenComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
