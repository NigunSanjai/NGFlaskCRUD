import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListusersComponent } from './listusers/listusers.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListusersComponent,
    LoginComponent,
    UserdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
