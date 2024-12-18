import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  dummyUrl = "https://reqres.in/api/users"
  constructor(private http:HttpClient) { }

  addEmployee(requestBody:any){
    
    return this.http.post(this.dummyUrl,requestBody)
  }
}
