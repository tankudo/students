import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './components/students/students.component';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GenderPipe } from './pipe/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    AddUserComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
