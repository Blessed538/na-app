import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { ViewSingleDivisionComponent } from './view-single-division/view-single-division.component';
import { ViewSingleUnitComponent } from './view-single-unit/view-single-unit.component';
import { CreateDivisionComponent } from './create-division/create-division.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { DeploymentListsComponent } from './deployment-lists/deployment-lists.component';

const routes: Routes = [
  { path: '', redirectTo: 'showcase', pathMatch: 'full' },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'divisions', component: DivisionsComponent },
  { path: 'single-div', component: ViewSingleDivisionComponent },
  { path: 'single-unit', component: ViewSingleUnitComponent },
  { path: 'create-div', component: CreateDivisionComponent },
  { path: 'create-unit', component: CreateUnitComponent },
  { path: 'deployed-lists', component: DeploymentListsComponent },

  // { path: 'divisions/view/:id', component: ViewSingleDivisionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
