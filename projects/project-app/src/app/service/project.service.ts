import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  dummyUrl = "https://reqres.in/api/users"
  constructor(private http:HttpClient) { }

  addProject(requestBody:any){
    return this.http.post(this.dummyUrl,requestBody)
  }
  assignProject(requestBody:any){
    return this.http.post(this.dummyUrl,requestBody)
  }
}
