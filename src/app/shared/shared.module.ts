import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NgxCaptchaModule],
  exports: [CommonModule, ReactiveFormsModule, NgxCaptchaModule, SafePipe],
  declarations: [SafePipe]
})
export class SharedModule {}
