import { Component, OnInit } from '@angular/core';
import {AlbumName} from '../albumName';
import { GetAlbumsService } from '../get-albums.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private uploadAlbumService: GetAlbumsService) { }
  albumArray = [];
  newAlbumArray : Observable<any[]>;
  ngOnInit() {
    //console.log(this.uploadAlbumService.getAlbums().subscribe());
    this.uploadAlbumService.getAlbums().subscribe(
      list => {
        this.albumArray = list.map(item =>{
          //console.log(item.payload.val());
          return {
            $key:item.key,
            ...item.payload.val()} 
            
        })
      })
    //this.uploadAlbumService.createArrayOfAlbums(this.albumArray);
  }

  deleteThisLine($key){
    if (confirm('Are you sure you want to delete this album tag?')){
      this.uploadAlbumService.deleteAlbum($key);
    }
  }


}
