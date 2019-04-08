import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {GetAlbumsService} from '../../album/get-albums.service';
import { UploadFileService } from '../upload-file.service';
import {CalculateMatGridService} from '../../calculate-mat-grid.service';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})

export class ListUploadComponent implements OnInit {

  fileUploads: any[];
  albumArray=[];
  filesAndAlbums = {};
  test=[];
  //for the # of columns in the matgrid
  breakpoint:number;

  constructor(private uploadService: UploadFileService, private uploadAlbumService:GetAlbumsService, private matGridWidth:CalculateMatGridService) { }

  ngOnInit() {
    this.breakpoint = this.matGridWidth.getInitWidth(window.innerWidth);


    this.uploadAlbumService.getAlbums().subscribe(
      list => {
        this.albumArray = list.map(item =>{
          //console.log(this.albumArray);
          return {
            $key:item.key,
            ...item.payload.val()} 
            
        });

        for(var i = 0; i < this.albumArray.length; i++){
          var basePath = this.albumArray[i].name;
          //console.log(basePath);
          this.uploadService.getFileUploads(basePath).snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
              )
            ).subscribe(fileUploads => {
            this.fileUploads = fileUploads;
            if (this.fileUploads.length > 0){
              this.test.push(fileUploads);
            }
            
            console.log(this.test);
            //this.filesAndAlbums[basePath] = {fileUploads};
            //console.log(this.filesAndAlbums);
            });
        }
      });

    

    //console.log(this.albumInfo.getArray());
    // Use snapshotChanges().pipe(map()) to store the key
    // this.uploadService.getFileUploads(6).snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //   )
    // ).subscribe(fileUploads => {
    //   this.fileUploads = fileUploads;
    // });
    
  }
  onResize(event){
    this.breakpoint = this.matGridWidth.windowResize(event);
  }
  //windowResize

  enterAlbum(event,albumName:string){
    this.uploadService.setAlbumFromList(event,albumName);
    //console.log(event);
  }
}
