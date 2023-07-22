import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector:'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  profileForm = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
