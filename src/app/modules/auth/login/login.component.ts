import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector:'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  profileForm = new FormGroup<any>({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
