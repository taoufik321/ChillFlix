import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VideoService } from '../video/video.service';
import { GetVideo, GetVideoComplete, GetError, AddVideo, AddVideoComplete, RemoveVideo, VideoActionTypes } from './video.actions';


@Injectable()
export class VideoEffects {

  constructor(
    private readonly videoService: VideoService,
    private readonly actions$: Actions) { }

    @Effect()
    get$: Observable<GetVideoComplete | GetError> = this.actions$.pipe(
        ofType<GetVideo>(VideoActionTypes.GET),
        mergeMap(action =>
            this.videoService.getVideos().pipe(
                map((videos) => new GetVideoComplete(videos)),
                catchError(() => of(new GetError()))
            )
        )
    );

    @Effect()
    add$: Observable<AddVideoComplete | GetError> = this.actions$.pipe(
        ofType<AddVideo>(VideoActionTypes.ADD),
        mergeMap(action =>
            this.videoService.createVideo(action.payload).pipe(
                map((video) => new AddVideoComplete(video)),
                catchError(() => of(new GetError()))
            )
        )
    );

}
