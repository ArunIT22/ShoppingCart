import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  defaultCity = "";

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("regForm") regForm!: NgForm;

  // onSubmit(data : NgForm) {
  //   //console.log("Form Submitted");
  //   console.log(data);
  // }

  onSubmit() {
    console.log(this.regForm);
  }
}
