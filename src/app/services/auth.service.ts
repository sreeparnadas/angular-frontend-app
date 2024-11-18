import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn = new Subject<boolean>();
  http = inject(HttpClient)

  constructor(private router: Router) { }

  login(loginObj: {email:string,password:string}){
    this.http.post("http://localhost:3000/api/users/login",loginObj).subscribe((res:any) => {
      if(res.result == true){
        this.router.navigateByUrl("admin")
        this.userLoggedIn.next(true)
        localStorage.setItem("loggedinUserObj",JSON.stringify(res.data))
      }
      else
        alert(res.message)
    })
  }

  getLoggedinUserObject(){
    const loggedinUser = localStorage.getItem('loggedinUserObj')
    if(loggedinUser){
      return JSON.parse(loggedinUser)
    }
    else{
      return null;
    }
  }

  logout(){
    localStorage.removeItem('loggedinUserObj')
    this.userLoggedIn.next(false)
    this.router.navigateByUrl("/")
  }
}
