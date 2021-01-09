import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MysecondcomponentComponent } from './mysecondcomponent/mysecondcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MysecondcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
