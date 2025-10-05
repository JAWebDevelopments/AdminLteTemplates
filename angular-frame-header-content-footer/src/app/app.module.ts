import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { FrameHeaderComponent } from './frame/header/header.component';
import { FrameContentComponent } from './frame/content/content.component';
import { FrameFooterComponent } from './frame/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FrameComponent, FrameHeaderComponent, FrameContentComponent, FrameFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
