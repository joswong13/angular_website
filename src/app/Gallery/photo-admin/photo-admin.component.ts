import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import {AuthGuardService} from '../authServices/auth-guard.service';
import {AlbumComponent} from '../album/album/album.component';

@Component({
  selector: 'app-photo-admin',
  templateUrl: './photo-admin.component.html',
  styleUrls: ['./photo-admin.component.css']
})

// const adminRoute:Routes=[
//   {path: 'albums', component: AlbumComponent, canActivate:[AuthGuardService]},
// ]


// @NgModule({
//   imports:[RouterModule.forRoot(adminRoute)],
//   exports:[RouterModule]
// })
export class PhotoAdminComponent implements OnInit {

  navLinks=[
    {path:'albums',label:'Album Names'},
    {path:'uploads',label:'Upload'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
