import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
} from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css'],
})
export class UserdashboardComponent {
  currentUser!: string;
  userdashboardForm!: FormGroup;
  title!: string;
  selectedValue!: string;
  selectedTimePeriod!: string;
  selectedNumber!: string;
  fileNames!: any;
  fileName!: string;
  namea!: any;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.currentUser = sessionStorage.getItem('user_id') as string;
  }
  ngOnInit() {
    this.userdashboardForm = this.fb.group({
      file: ['', Validators.required],
      // column_value: ['', [Validators.required]],
      // time_period: ['', Validators.required],
      // number_value: ['', Validators.required],
    });
    const fileNamesStr = localStorage.getItem('users') ?? '';
    const fileNamesObj = JSON.parse(fileNamesStr);
    this.fileNames = fileNamesObj.filenames;

    console.log(this.fileNames);
    console.log(typeof this.fileNames);
  }
  ngOnChange(event: any) {
    this.selectedTimePeriod = event.target.value;
  }
  ngOnChange1(event: any) {
    this.selectedValue = event.target.value;
  }
  ngOnChange2(event: any) {
    this.selectedNumber = event.target.value;
  }
  ngOnChange3(event: any) {
    this.title = event.target.value;
  }
  onFileSelect(event: any) {
    this.fileName = event.target.value;
    console.log(this.fileName);
  }
  onSubmit() {
    this.usersService
      .sendFile(
        this.currentUser,
        this.title,
        this.selectedValue,
        this.selectedTimePeriod,
        this.selectedNumber,
        this.fileName
      )
      .subscribe(
        (response: any) => {
          console.log('Done and Dusted');
        },
        (error: any) => {
          console.error('Error uploading file:', error);
        }
      );
  }
}
