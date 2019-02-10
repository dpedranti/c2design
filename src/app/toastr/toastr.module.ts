import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr.component';
import { ToastrService } from './toastr.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastrComponent],
  exports: [ToastrComponent],
  providers: [ToastrService]
})
export class ToastrModule {}
