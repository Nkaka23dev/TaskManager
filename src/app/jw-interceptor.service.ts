import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwInterceptorService implements HttpInterceptor {

  constructor() { } 

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{ 
    var currentUser={tokens:""} 
    if(sessionStorage.currentuser!=null){
      currentUser=JSON.parse(sessionStorage.currentUser)
    }
   request=request.clone({
     setHeaders:{
       Authorization:"Bearer"+currentUser.tokens
     }
   })
   return next.handle(request)
  }

}
