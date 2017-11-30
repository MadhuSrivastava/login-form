import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule , Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { ParallexComponent } from './parallex/parallex.component';

const appRoutes:Routes = [
  {
    path: 'login',
    component:LoginComponent
  }
  ,
  {
    path: 'home',
    component:ParallexComponent
  }
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatatableComponent,
    NavbarComponent,
    ListgroupComponent,
    ParallexComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
