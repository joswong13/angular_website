import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AlbumName} from '../albumName';
import { GetAlbumsService } from '../get-albums.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumName = new FormControl();
  currentAlbumName: AlbumName;
  albumArray = [];
  constructor(private uploadAlbumService: GetAlbumsService) { }

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

  
  clearName(){
    //this.itemName.setValue('');
    this.albumName.reset();
  }
  sendToDB(){
    this.currentAlbumName = new AlbumName(this.albumName.value);
    this.uploadAlbumService.saveAlbumName(this.currentAlbumName);
    console.log(this.albumName.value);
    this.albumName.reset();
  }
}
