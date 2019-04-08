import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload/upload-file.service';
import {CalculateMatGridService} from '../calculate-mat-grid.service';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ImageModalComponent} from '../image-modal/image-modal.component';
import {AuthServiceService} from '../authServices/auth-service.service';
@Component({
  selector: 'app-view-albums',
  templateUrl: './view-albums.component.html',
  styleUrls: ['./view-albums.component.css']
})
export class ViewAlbumsComponent implements OnInit {
  imagesAndAlbumArray=[];
  albumName:string;
  albumArray = [];
  breakpoint:number;
  isLogged:boolean;

  loadPartOfImages = [];
  maxRows:number;
  constructor(private authService:AuthServiceService,private uFS:UploadFileService, private matGridWidth:CalculateMatGridService,public dialog: MatDialog) { }

  ngOnInit() {
    //this.isLogged = this.authService.isLoggedIn();
    console.log("Runonce?");
    this.imagesAndAlbumArray = this.uFS.getAlbumFromList();
    this.albumName = this.imagesAndAlbumArray[0];
    this.albumArray = this.imagesAndAlbumArray[1];
    
    // console.log("Height is " + window.innerHeight);
    
    //width

    this.breakpoint = this.matGridWidth.getInitWidth(window.innerWidth);
    this.maxRows = this.breakpoint * 3;
    console.log(this.maxRows);
    
    // for (var h = 0; h < 2; h++){
    //   this.testArray.push(this.albumArray[h]);
    //   console.log(h + ": itereate array" + this.albumArray[h]);
    // }
    //  console.log(this.testArray);
  }

  onResize(event){
    this.breakpoint = this.matGridWidth.windowResize(event);
  }

  openDialog(imageURL:string) {
    console.log("OPEN DIALOG " + imageURL);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = window.innerHeight;
    dialogConfig.data = {
      imageURL: imageURL
  };

    this.dialog.open(ImageModalComponent, dialogConfig);
}
  sendAlbumBasePath(event){
    console.log(event);
    this.uFS.sendBasePathToViewImage(event);
  }

  deleteFileUpload(file) {
    console.log(file);
    //this.uFS.deleteFileUpload(file);
  }

}
