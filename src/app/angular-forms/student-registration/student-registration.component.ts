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

    if(this.regForm.valid){
      console.log(this.regForm.value);
      this.regForm.reset();
    }
  }

  addDefaultValues() {
    // this.regForm.setValue({
    //   FullName: {
    //     firstName: 'Bathri',
    //     lastName: 'Pavan'
    //   },
    //   email: '',
    //   city: '',
    //   gender: ''
    // });

    this.regForm.form.patchValue({
      FullName: {
        firstName: 'Bathri',
        lastName: 'Pavan'
      }
    })
  }
}
