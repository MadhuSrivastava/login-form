import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule , Routes } from '@angular/router';
import { DatatableComponent } from './datatable/datatable.component';

const appRoutes:Routes = [
  {
    path: 'login',
    component:LoginComponent
  }
  ,
  {
    path: 'datatable',
    component:DatatableComponent
  }
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatatableComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
