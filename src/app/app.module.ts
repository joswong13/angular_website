//Basic imports
//------------------------------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule,MatButtonModule, MatIconModule,MatListModule,MatTabsModule,MatCardModule,MatProgressBarModule,MatSelectModule,MatOptionModule,MatGridListModule,MatToolbarModule,MatMenuModule} from '@angular/material';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//Prod components
//------------------------------------------------------------------------------------
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//Firebase imports
//------------------------------------------------------------------------------------
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
//My Pages
//------------------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
//Calculate components
//------------------------------------------------------------------------------------
import { CalculateValueComponent } from './calculate-value/calculate-value.component';
import { CalculateListComponent } from './calculate-list/calculate-list.component';
import { CalculateDisplayComponent } from './calculate-display/calculate-display.component';
//Gallery app components
//------------------------------------------------------------------------------------
import { FormUploadComponent } from './Gallery/upload/form-upload/form-upload.component';
import { ListUploadComponent } from './Gallery/upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './Gallery/upload/details-upload/details-upload.component';
import { AlbumComponent } from './Gallery/album/album/album.component';
import { AlbumListComponent } from './Gallery/album/album-list/album-list.component';
import { LoginComponent } from './Gallery/login/login.component';
import { ViewAlbumsComponent } from './Gallery/view-albums/view-albums.component';
import { PhotoAdminComponent } from './Gallery/photo-admin/photo-admin.component';
import { ImageModalComponent } from './Gallery/image-modal/image-modal.component';
//------------------------------------------------------------------------------------
//Auth services
import {AuthServiceService} from './Gallery/authServices/auth-service.service';
import {AuthGuardService} from './Gallery/authServices/auth-guard.service';
import {LogGuardService} from './Gallery/authServices/log-guard.service';
import { VersionComponent } from './version/version.component';
//TEST-----------------------------------------------------------------------------
import { FirstModalPageComponent } from './testModal/first-modal-page/first-modal-page.component';
import { ModalPopUpComponent } from './testModal/modal-pop-up/modal-pop-up.component';


//{path: 'admin/albums', component: AlbumComponent, canActivate:[AuthGuardService]},
//
const appRoutes:Routes=[
  {path: '', component: MainpageComponent},
  {path: 'calculate', component: CalculateDisplayComponent},
  {path: 'viewalbum', component: ViewAlbumsComponent },
  {path: 'image/:id', component: DetailsUploadComponent},
  {path: 'gallery',component: ListUploadComponent },
  {path: 'version',component: VersionComponent },
  {path: 'test',component: FirstModalPageComponent },
  {path: 'admin', 
  component: PhotoAdminComponent, 
  canActivate:[AuthGuardService],
  children:[{
    path:'albums',
    component: AlbumComponent, 
    canActivate:[AuthGuardService]
  },
  {
    path:'uploads',
    component: FormUploadComponent, 
    canActivate:[AuthGuardService]
  }
]
},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MynavbarComponent,
    CalculateValueComponent,
    MainpageComponent,
    CalculateListComponent,
    CalculateDisplayComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    AlbumComponent,
    AlbumListComponent,
    LoginComponent,
    PhotoAdminComponent,
    ViewAlbumsComponent,
    VersionComponent,
    FirstModalPageComponent,
    ModalPopUpComponent,
    ImageModalComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatOptionModule,
    MatProgressBarModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuardService,AuthServiceService],
  bootstrap: [AppComponent],
  entryComponents:[ModalPopUpComponent,ImageModalComponent]
})
export class AppModule { }
