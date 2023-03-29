import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListusersComponent } from './listusers/listusers.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: ListusersComponent,
    canActivate: [GuardGuard],
  },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
