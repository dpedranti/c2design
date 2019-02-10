import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IToastr } from './toastr';
import { ToastrType } from './toastr.enum';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private subject = new Subject<IToastr>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getToastr(): Observable<any> {
    return this.subject.asObservable();
  }

  success({ title = null, message, keepAfterRouteChange = false }) {
    this.toastr(ToastrType.Success, title, message, keepAfterRouteChange);
  }

  error({ title = null, message, keepAfterRouteChange = false }) {
    this.toastr(ToastrType.Error, title, message, keepAfterRouteChange);
  }

  info({ title = null, message, keepAfterRouteChange = false }) {
    this.toastr(ToastrType.Info, title, message, keepAfterRouteChange);
  }

  warn({ title = null, message, keepAfterRouteChange = false }) {
    this.toastr(ToastrType.Warning, title, message, keepAfterRouteChange);
  }

  toastr(
    type: ToastrType,
    title: string,
    message: string,
    keepAfterRouteChange = false
  ) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<IToastr>{ type, title, message });
  }

  clear() {
    this.subject.next();
  }
}
