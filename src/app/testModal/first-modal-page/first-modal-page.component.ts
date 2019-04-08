import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ModalPopUpComponent} from '../modal-pop-up/modal-pop-up.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-first-modal-page',
  templateUrl: './first-modal-page.component.html',
  styleUrls: ['./first-modal-page.component.css']
})


export class FirstModalPageComponent {


  constructor(public dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Angular For Beginners'
  };

    this.dialog.open(ModalPopUpComponent, dialogConfig);
}


}
