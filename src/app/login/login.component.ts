import { LoginService } from './../login.service';
import { LoginViewModel } from './../login-view-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 

  loginViewModel:LoginViewModel=new LoginViewModel() 
  loginError:string="" 

  data:any=[]

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  onLoginClick(event:any){ 
    this.loginService.Login(this.loginViewModel).subscribe(
      (response)=>{
      this.router.navigateByUrl('/dashboard')
      let p=new LoginViewModel()
      p.email=response.email
      },
      (error)=>{
        console.log('Error',error) 
        this.loginError="Invalid user login"
      }
    )

  }
}
