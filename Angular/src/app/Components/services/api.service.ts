import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/login';
import { ResponseModel } from '../../models/response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { PeopleModel } from 'src/app/models/personas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  onLoginByEmail(form: LoginModel): Observable<ResponseModel>{
    let address = this.url + "auth";

    return this.http.post<ResponseModel>(address, form)
  }

  onSavePeople(form: PeopleModel): Observable<ResponseModel>{
    let address = this.url + "personas";
    console.log(form);

    return this.http.post<ResponseModel>(address, form)
  }
}
