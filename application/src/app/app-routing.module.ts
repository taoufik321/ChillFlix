import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoComponent } from './video/video.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';

import { AdminVideoComponent } from './admin-video/admin-video.component';
import { AuthGuard } from './authentication/auth.guard';
import { AuthGuardService } from './authentication/auth-guard.service';

const routes: Routes = [
  { path: 'videos', component: VideoComponent },
  { path: 'add', component: AddVideoComponent, canActivate: [ AuthGuard, AuthGuardService ] },
  { path: 'login',  loadChildren: './authentication/auth.module#AuthModule' },
  { path: 'admin', component: AdminVideoComponent },
  { path: 'detail/:id', component: DetailVideoComponent },
  { path: '', redirectTo: '/videos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
