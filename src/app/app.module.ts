import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CnesFormComponent } from './cnes-form/cnes-form.component';

import { LoginService } from './services/login.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavBarComponent, CnesFormComponent],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
