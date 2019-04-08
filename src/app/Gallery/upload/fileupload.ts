export class FileUpload{
    key:string;
    name:string;
    url:string;
    file:File;
    basepath:string;
    constructor(file:File){
        this.file=file;
    }
}