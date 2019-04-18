import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Login {
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint_url = 'http://127.0.0.1:8080/register?user=esdfhsd&pass=sdfdsfl';

  constructor(private http: HttpClient) { }

  get_response() {
    return this.http.get<Login>(this.endpoint_url)
      .pipe(
        // retry(3), // retry a failed request up to 3 times
        catchError(this.handle_error) // then handle the error
      );
  }


  private handle_error(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  make_intentional_error() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handle_error)
      );
  }
}
