import { Project } from './project';
import {Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import {map} from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url="http://localhost:8000/auth/login/";
 
  constructor(private httpClient:HttpClient) {
   }

  currentUser:any=null  
 
  public Login(loginViewModel:LoginViewModel):Observable<any>{
  return this.httpClient.post<any>(this._url,loginViewModel,
    {responseType:"json"}).pipe(
      map(
        (user:any)=>{ 
          if(user){
            this.currentUser=user.username;
            sessionStorage.currentUser=JSON.stringify(user)
          }
          return user
        }
      )
    )
  } 
  public logout(){
    sessionStorage.removeItem("currentUser")
    this.currentUser=null
  }

}
