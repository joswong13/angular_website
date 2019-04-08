import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { FileUpload } from '../fileupload';
import { GetAlbumsService } from '../../album/get-albums.service';
@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  numberOfFiles: number;
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
 
  constructor(private uploadService: UploadFileService,private uploadAlbumService: GetAlbumsService) { }
  albumArray = [];
  selected:string;

  ngOnInit() {
    this.uploadAlbumService.getAlbums().subscribe(
      list => {
        this.albumArray = list.map(item =>{
          //console.log(this.albumArray);
          return {
            $key:item.key,
            ...item.payload.val()} 
            
        })
      });
  }

  selectFile(event) {
    this.numberOfFiles = event.target.files.length;
    this.selectedFiles = event.target.files;
    //console.log(this.selectedFiles);
    // for (var i = 0; i < this.numberOfFiles; i++){
    //   //console.log(event.target.files[i]);
    //   var file = this.selectedFiles[i];
    //   if (!(file.type.match('image.*'))){
    //     alert(file.name + ' has an invalid format!');
    //   }
    // }


//     const file = event.target.files.item(0);
//  console.log(event.target.files);
//     if (file.type.match('image.*')) {
//       this.selectedFiles = event.target.files;
//     } else {
//       alert('invalid format!');
//     }
  }
 
  upload() {
    const filesToUpload = this.selectedFiles;
    console.log(filesToUpload.length);

    for (var i = 0; i < this.numberOfFiles; i++){
      //console.log(event.target.files[i]);
      var file = this.selectedFiles[i];
      if (!(file.type.match('image.*'))){
        alert(file.name + ' has an invalid format!');
      }
      else{
        // console.log(file);
        // console.log(this.selected);
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.selected,this.currentFileUpload, this.progress);
      }
      
    }
    
  }
}