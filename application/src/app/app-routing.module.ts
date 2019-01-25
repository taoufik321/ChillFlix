import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';

import { AdminVideoComponent } from './admin-video/admin-video.component';

//import {AddVideoComponent} from './video/add-video.component';

const routes: Routes = [
  { path: 'videos', component: VideoComponent },
  { path: 'add', component: AddVideoComponent },
  { path: 'admin', component: AdminVideoComponent },
  { path: 'detail/:id', component: DetailVideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
