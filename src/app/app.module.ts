import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book/new-book.component';
import { DisplayBookComponent } from './display-book/display-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    DisplayBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
