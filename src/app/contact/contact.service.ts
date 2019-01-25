import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IContact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsUrl = 'http://localhost:8080/api/contacts'; // TODO: Get from config

  constructor(private http: HttpClient) {}

  getContact(id: number): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.contactsUrl}/${id}`).pipe(
      tap(data => console.log('Get contact:', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  saveContact(body: object): Observable<IContact[]> {
    return this.http.post<IContact[]>(this.contactsUrl, body).pipe(
      tap(data => console.log('Save contact:', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage;
    if (err.error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}. Error message: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
