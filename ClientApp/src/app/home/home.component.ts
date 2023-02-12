import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  userInfo = {
    fName: 'Elad',
    lName: 'Mor'
  }
  emailFormControl = new FormControl('Elad@gmail.com', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    console.log("Obj:", this.emailFormControl);
  }

}
