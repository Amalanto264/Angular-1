import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TestComponent,
    UserComponent,
    UserdataComponent,
    Error404Component,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
