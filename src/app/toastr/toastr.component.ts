import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrType } from './toastr.enum';
import { IToastr } from './toastr';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit, OnDestroy {
  toastrs: IToastr[] = [];

  private interval;

  constructor(private toastrService: ToastrService) {}

  ngOnInit() {
    this.toastrService.getToastr().subscribe((toastr: IToastr) => {
      if (!toastr) {
        this.toastrs = [];
        return;
      }
      this.toastrs.push(toastr);

      const { timeout } = toastr;
      if (timeout) {
        this.interval = setTimeout(() => this.removeToastr(toastr), timeout);
      }
    });
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }

  removeToastr(toastr: IToastr) {
    this.toastrs = this.toastrs.filter(a => a !== toastr);
  }

  cssClass(toastr: IToastr) {
    if (!toastr) {
      return;
    }
    switch (toastr.type) {
      case ToastrType.Success:
        return 'alert alert-success';
      case ToastrType.Error:
        return 'alert alert-danger';
      case ToastrType.Info:
        return 'alert alert-info';
      case ToastrType.Warning:
        return 'alert alert-warning';
    }
  }
}
