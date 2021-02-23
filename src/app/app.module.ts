import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { FooterComponent } from './footer/footer.component';
import { ViewSingleDivisionComponent } from './view-single-division/view-single-division.component';
import { RegisterDivisionComponent } from './register-division/register-division.component';
import { ViewSingleUnitComponent } from './view-single-unit/view-single-unit.component';
import { CreateDivisionComponent } from './create-division/create-division.component';
import { CreateUnitComponent } from './create-unit/create-unit.component';
import { DeploymentListsComponent } from './deployment-lists/deployment-lists.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowcaseComponent,
    RegisterComponent,
    LoginComponent,
    DivisionsComponent,
    FooterComponent,
    ViewSingleDivisionComponent,
    RegisterDivisionComponent,
    ViewSingleUnitComponent,
    CreateDivisionComponent,
    CreateUnitComponent,
    DeploymentListsComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, ModalModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
