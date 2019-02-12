import { ToastrType } from './toastr.enum';

export interface IToastr {
  type: ToastrType;
  message: string;
  title?: string;
  timeout?: number;
}
