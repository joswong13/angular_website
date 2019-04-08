import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
 
import { FileUpload } from './fileupload';
 
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  //variables to be passed around
  albumArrayFromListComp = [];
  albumName:string;
  singleImage:FileUpload;
  singleImageBasePath:string;
  private basePath:string;
  listOfPhotosInAlbum: AngularFireList<any>;
  
  
  //constructor
  constructor(private db: AngularFireDatabase) { }
 
  pushFileToStorage(basePath:string, fileUpload: FileUpload, progress: { percentage: number }) {
    this.basePath=basePath;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // monitor upload in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          fileUpload.basepath=this.basePath;
          this.saveFileData(fileUpload);
        });
      }
    );
  }
 
  private saveFileData(fileUpload: FileUpload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);
  }
 

  //get all files from an album
  getFileUploads(basepath:string): AngularFireList<FileUpload> {
    console.log("getFileUploads");
    this.basePath=basepath;
    this.listOfPhotosInAlbum = this.db.list(this.basePath)
    //console.log(this.db.list('Japan Trip'));
    //console.log(this.db.list(this.basePath, ref =>ref.limitToLast(numberItems)));
    return this.listOfPhotosInAlbum;

  }
 
  deleteFileUpload(fileUpload: FileUpload) {
    this.deleteFileDatabase(fileUpload.basepath,fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.basepath,fileUpload.name);
      })
      .catch(error => console.log(error));
  }
 
  private deleteFileDatabase(base:string,key: string) {
    return this.db.list(`${base}/`).remove(key);
  }
 
  private deleteFileStorage(base:string, name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${base}/${name}`).delete();
  }
//send from list component to view the album
  setAlbumFromList(albumArray,albumName:string){
    this.albumArrayFromListComp = albumArray;
    this.albumName=albumName;
    //console.log(this.albumArrayFromListComp);
  }
//get from view album component to view album
  getAlbumFromList(){
    console.log("getAlbumFromList");
    var tempArray = [];
    tempArray.push(this.albumName);
    tempArray.push(this.albumArrayFromListComp);
    return tempArray;
    //console.log(this.albumArrayFromListComp);
  }

  //send from view album the base path for the single image

  // sendBasePathToViewImage(imageBasePath:string){
  //   this.singleImageBasePath = imageBasePath;
  // }
  sendBasePathToViewImage(image:FileUpload){
    this.singleImage = image;
  }

  getBasePathToViewImage(){
    return this.singleImageBasePath;
  }
  //get one image for the details component
  // getImage(imageBasePath:string, key: string) {
  //   return firebase.database().ref(imageBasePath+'/' + key).once('value')
  //   .then((snap) => snap.val());
  // }
  getImage() {
    return this.singleImage;
  }
}