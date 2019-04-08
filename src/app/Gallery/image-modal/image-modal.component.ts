import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {
  
  imageURL:string;
  
    constructor(private dialogRef: MatDialogRef<ImageModalComponent>,@Inject(MAT_DIALOG_DATA) data) {
      this.imageURL = data.imageURL;
      console.log(data);
    }
  
    close() {
      this.dialogRef.close();
      //console.log("Closed");
  }

  ngOnInit() {
  }

}
