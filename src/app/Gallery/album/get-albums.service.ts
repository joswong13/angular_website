import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import {AlbumName} from './albumName';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumsService {
  //albumArray = [];
  listOfAlbumName: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }

  saveAlbumName(album: AlbumName) {
    this.db.list(`AlbumNames/`).push(album);
  }
  getAlbums(){
    this.listOfAlbumName = this.db.list('AlbumNames');
    return this.listOfAlbumName.snapshotChanges();
  }

  deleteAlbum($key){
    this.db.list('AlbumNames/').remove($key);
  }

  // createArrayOfAlbums(){
  //   this.getAlbums().subscribe(
  //     list => {
  //       this.albumArray = list.map(item =>{
  //         //console.log(this.albumArray);
  //         return {
  //           $key:item.key,
  //           ...item.payload.val()} 
            
  //       });
  //       console.log(this.albumArray);
  //       return this.albumArray;
  //     });
      
  // }

  // getArray(){
  //   return this.albumArray;
  // }

}
