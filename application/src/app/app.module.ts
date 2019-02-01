import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';

import { VideoService } from './video/video.service';

import { AddVideoComponent } from './add-video/add-video.component';
import { HeaderComponent } from './ui/header/header.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { AdminVideoComponent } from './admin-video/admin-video.component';

import { LogoutComponent } from './authentication/logout.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { AuthService } from './authentication/auth.service';

import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/video.reducer';

import { EffectsModule } from '@ngrx/effects';
import { VideoEffects } from './store/video.effects';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    AddVideoComponent,
    HeaderComponent,
    DetailVideoComponent,
    AdminVideoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([VideoEffects]),
    StoreModule.forRoot({
      video: reducer
    })
  ],
  providers: [VideoService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
