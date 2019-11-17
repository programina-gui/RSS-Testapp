import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogConfig {
    title?: string,
    content?: string,
    ok?: string,
    close: string
}


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})


export class ConfirmDialogComponent {

  get dialog(): DialogConfig {
      return this.data;
  }

  constructor(
     @Inject(MAT_DIALOG_DATA) public data: DialogConfig,
      public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }


}