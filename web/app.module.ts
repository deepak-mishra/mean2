import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutes }  from './app.routes';
import { HomeComponent }  from './components/home.component';
import { ContactComponent }  from './components/contact.component';


@NgModule({
  imports: [ 
  	BrowserModule,
    AppRoutes,
    FormsModule,
    HttpModule
  ],
  declarations: [ 
  	AppComponent,
    HomeComponent,
    ContactComponent
  ],
  providers:    [ 

  ],
  bootstrap:    [	AppComponent]
})

export class AppModule { }
