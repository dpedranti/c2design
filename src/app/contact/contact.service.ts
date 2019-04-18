import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IContact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    private http: HttpClient,
    @Inject('CONTACT_API') private contactApi: string
  ) {}

  emailContact(body: object): Observable<IContact[]> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<IContact[]>(this.contactApi, body, options).pipe(
      tap(data => console.log('Email contact:', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    const errorMessage = `Server returned code: ${err.status}. Error message: ${
      err.message
    }`;
    console.error(err);
    return throwError(errorMessage);
  }
}
