import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { ActivatedRoute } from '@angular/router';
import {AuthServiceService} from '../../authServices/auth-service.service';
import {FileUpload} from '../fileupload';
@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  private imageUrl = '';
  private basePath:string;
  isLogged:boolean;
  image:FileUpload;
  constructor(private uploadService: UploadFileService, private route:ActivatedRoute, private authService:AuthServiceService) { }

  ngOnInit() {
    // this.basePath=this.uploadService.getBasePathToViewImage();
    // this.getImageUrl(this.basePath,this.route.snapshot.params['id']);
    this.isLogged = this.authService.isLoggedIn();
    this.image = this.uploadService.getImage();
  }

  // getImageUrl(basePath:string,key: string) {
  //   this.uploadService.getImage(basePath,key)
  //     .then(image => this.imageUrl = image.url);
  // }

  deleteFileUpload(file) {
    //console.log(file);
    this.uploadService.deleteFileUpload(file);
  }
}