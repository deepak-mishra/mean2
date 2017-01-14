import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent }  from './components/home.component';
import { ContactComponent }  from './components/contact.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }