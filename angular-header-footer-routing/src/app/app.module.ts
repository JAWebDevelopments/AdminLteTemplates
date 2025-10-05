import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , appRoutingModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent,FooterComponent,HomeComponent,BlogComponent,FormsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
