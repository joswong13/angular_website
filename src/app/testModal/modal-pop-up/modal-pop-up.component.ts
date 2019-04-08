import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css']
})
export class ModalPopUpComponent{
  title:string;
  
    constructor(private dialogRef: MatDialogRef<ModalPopUpComponent>,@Inject(MAT_DIALOG_DATA) data) {
      this.title = data.title;
      console.log(data);
    }
  
    close() {
      this.dialogRef.close();
      console.log("Closed");
  }
}
