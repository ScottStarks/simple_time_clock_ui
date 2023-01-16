import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  info(message: string) {
    swal.fire('Success', message, 'success');
  }

  warning(message: string): void {
    swal.fire('Warning', message, 'warning');
  }

  error(message: string) {
    swal.fire('Error', message, 'error');
  }

  success(message: string, callback: any) {
    swal.fire('Success',
      message,
      'success'
    );
    if (callback != null) {
      callback();
    }
  }

  updateSuccess(message: string, callback: any) {
    swal.fire('Success', message, 'success');
    if (callback != null) {
      callback();
    }
  }
}

