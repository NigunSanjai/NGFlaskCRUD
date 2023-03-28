import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  router: any;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private usersService: UsersService
  ) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  postdata(forms: any) {
    this.usersService
      .addUser(
        this.angForm.value.name,
        this.angForm.value.email,
        this.angForm.value.password,
        this.angForm.value.contact
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.route.navigate(['list-user']);
        },
        (error) => {}
      );
  }
}
