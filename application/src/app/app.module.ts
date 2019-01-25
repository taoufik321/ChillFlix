import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';

import {VideoService} from './video/video.service';
import {HttpClientModule} from "@angular/common/http";
import {AddVideoComponent} from './add-video/add-video.component';
import { HeaderComponent } from './ui/header/header.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { AdminVideoComponent } from './admin-video/admin-video.component';

//import {AddVideoComponent} from './video/add-video.component';



@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AddVideoComponent,
    HeaderComponent,
    DetailVideoComponent,
    AdminVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
