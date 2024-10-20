import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }

  private apiUrl = 'http://localhost:3000/api/users';
  http = inject(HttpClient)

  get(){
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError))
  }

  private handleError(error:any){
   return throwError(() => new Error("Something went wrong"));
  }
}
