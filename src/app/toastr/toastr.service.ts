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

  success({
    message,
    title = null,
    timeout = null,
    keepAfterRouteChange = false
  }) {
    this.toastr(
      ToastrType.Success,
      message,
      title,
      timeout,
      keepAfterRouteChange
    );
  }

  error({
    message,
    title = null,
    timeout = null,
    keepAfterRouteChange = false
  }) {
    this.toastr(
      ToastrType.Error,
      message,
      title,
      timeout,
      keepAfterRouteChange
    );
  }

  info({
    message,
    title = null,
    timeout = null,
    keepAfterRouteChange = false
  }) {
    this.toastr(ToastrType.Info, message, title, timeout, keepAfterRouteChange);
  }

  warn({
    message,
    title = null,
    timeout = null,
    keepAfterRouteChange = false
  }) {
    this.toastr(
      ToastrType.Warning,
      message,
      title,
      timeout,
      keepAfterRouteChange
    );
  }

  toastr(
    type: ToastrType,
    message: string,
    title?: string,
    timeout?: number,
    keepAfterRouteChange = false
  ) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<IToastr>{ type, title, message, timeout });
  }

  clear() {
    this.subject.next();
  }
}
