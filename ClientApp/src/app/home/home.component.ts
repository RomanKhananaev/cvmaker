import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  form!: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      fName: ["Elad", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      lName: ["Mor", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
      mail: ["eladmor@gmail.com", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phoneNumber: ["0548138620", [Validators.required, Validators.pattern('[0123456789]*'),
        Validators.minLength(10)]],
      linkedIn: "linkedIn"
    });
  }

  save(form: any) {
    console.log("Form: ", form);
  }

  clear(controlName: any) {
    console.log("Control Name: ", controlName);
    this.form.patchValue({
      [controlName]: ""
    });
  }
}
