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
      name: ["Elad Mor", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(5)]],
      mail: ["eladmor@gmail.com", [Validators.required, Validators.email]]
    });
  }

  save(form: any) {
    console.log("Form: ", form);
  }

  clear(conrolName: any) {
    this.form.reset(conrolName);
  }

}
