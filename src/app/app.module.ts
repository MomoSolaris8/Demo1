import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes : Routes= [
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  { // add the simple homenavagation
    path:"",
    redirectTo:"home",
    pathMatch: "full"
  },
  {
    path:'**',
    component: NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LayoutComponent,
    NavigationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
