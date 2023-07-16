import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from '../models/front/login-data';
import { baseURL } from '../env';
import { Token } from '@angular/compiler';
import { RegisterData } from '../models/front/register-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TODO
  //Use set-cookie header instead od JS-based and
  //localStorage jwt storage.
  public jwt:string = '';

  constructor(private http:HttpClient) { }
  //TODO
  // Pass user credntials in authorization header using GET
  // https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
  login(loginData:LoginData){
    this.http.post<Token>(`${baseURL}/auth/login`, loginData).subscribe(
      res => console.warn(`result of login: ${res}`)
    )
  }
  register(registerData:RegisterData){
    this.http.post<Token>(`${baseURL}/auth/register`, registerData).subscribe(
      res => console.warn(`result of register: ${res}`)
    )
  }
  validateToken(){
    this.http.get(`${baseURL}/auth/validate`).subscribe(res =>
      {
        console.warn(`result of token validaton: ${res}`)
      })
  }

}
