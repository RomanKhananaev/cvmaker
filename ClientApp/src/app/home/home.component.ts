import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserApiService } from '../services/user-api.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [{provide:MAT_DATE_LOCALE, useValue: 'en-GB'}]
})

export class HomeComponent {
  form!: FormGroup;
  calculate_age = 0;

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private userApi: UserApiService) {

  }


  ngOnInit() {
    this.form = this.fb.group({
      fName: ["Elad", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      lName: ["Mor", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      mail: ["eladmor@gmail.com", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phoneNumber: ["0548138620", [Validators.required, Validators.pattern('[0123456789]*'),
      Validators.minLength(10)]],
      linkedIn: "linkedIn",
      age: "Choose Your BirthDay"
    });
  }


  save(form: any) {
    //  console.log("Form: ", form);
    this.userApi.Test().subscribe(res => {
      console.log("Result: ", res);
    }, err => {
      console.log("Test Failed: ", err);
    })
  }

  calculateAge(value: any) {
    this.userApi.GetAge(value.value).subscribe(res => {
    this.calculate_age = res;
    }, err => {
      console.log("Failed to calculate age: ");
    })
  }

  clear(controlName: any) {
    console.log("Control Name: ", controlName);
    this.form.patchValue({
      [controlName]: ""
    });
  }
}
