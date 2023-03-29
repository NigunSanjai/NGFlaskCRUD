import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    sessionStorage.clear();
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    debugger;
    this.usersService.checkUser(email, password).subscribe((response) => {
      if (response.result) {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('user_id', response.user_id);
        alert('Welcome User!');
        this.router.navigate(['/dashboard'], {});
      } else {
        this.error = true;
      }
    });
  }
}
