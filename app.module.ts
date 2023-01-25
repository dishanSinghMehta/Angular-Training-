import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
//import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UsersService } from './services/users.service';




@NgModule({
  declarations: [
    AppComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,HttpClientModule/*important for http service only*/ //,FormsModule
    
  ],
  providers: [UsersService/*important for both services as well as Http Services */],
  bootstrap: [AppComponent]
})
export class AppModule { }
