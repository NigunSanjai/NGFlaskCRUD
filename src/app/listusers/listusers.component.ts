import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css'],
})
export class ListusersComponent {
  currentUser!: string;
  dashboardForm!: FormGroup;
  selectedValue!: string;
  selectedTimePeriod!: string;
  selectedNumber!: string;
  title!: string;
  formData: any;
  public file: any;
  users: string[] = [];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.currentUser = sessionStorage.getItem('user_id') as string;
  }
  ngOnInit() {
    this.dashboardForm = this.fb.group({
      file: ['', Validators.required],
      // column_value: ['', [Validators.required]],
      // time_period: ['', Validators.required],
      // number_value: ['', Validators.required],
    });
    // this.formSubscription = this.dashboardForm
    //   .get('value')
    //   ?.valueChanges.subscribe((value) => {
    //     this.selectedValue = value;
    //   });
    // this.formSubscription = this.dashboardForm
    //   .get('timeperiod')
    //   ?.valueChanges.subscribe((value) => {
    //     this.selectedTimePeriod = value;
    //   });
    // get the `user_id` parameter from the route
  }
  // ngOnChange(event: any) {
  //   this.selectedTimePeriod = event.target.value;
  // }
  // ngOnChange1(event: any) {
  //   this.selectedValue = event.target.value;
  // }
  // ngOnChange2(event: any) {
  //   this.selectedNumber = event.target.value;
  // }
  // ngOnChange3(event: any) {
  //   this.title = event.target.value;
  // }
  getFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  onSubmit() {
    if (this.file) {
      this.usersService
        .uploadFile(
          this.currentUser,
          // this.title,
          // this.selectedValue,
          // this.selectedTimePeriod,
          // this.selectedNumber,
          this.file
        )
        .subscribe(
          (response: any) => {
            console.log('File uploaded successfully!', response);
            this.usersService
              .getFilenames(this.currentUser)
              .subscribe((data: any) => {
                this.users = data;
                localStorage.setItem('users', JSON.stringify(this.users));
              });
            this.router.navigate(['/userdashboard'], {});
          },
          (error: any) => {
            console.error('Error uploading file:', error);
          }
        );
    }
  }
}
