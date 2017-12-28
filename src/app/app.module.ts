import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimatedTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
