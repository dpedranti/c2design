import { Component, OnInit } from '@angular/core';
import { ToastrType } from './toastr.enum';
import { IToastr } from './toastr';
import { ToastrService } from './toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  toastrs: IToastr[] = [];

  constructor(private toastrService: ToastrService) {}

  ngOnInit() {
    this.toastrService.getToastr().subscribe((toastr: IToastr) => {
      if (!toastr) {
        this.toastrs = [];
        return;
      }
      this.toastrs.push(toastr);
    });
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
