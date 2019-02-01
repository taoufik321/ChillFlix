import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Video } from '../models/video.model';

export enum VideoActionTypes {
    GET = '[VIDEO] Get',
    GET_COMPLETE  = '[VIDEO] Complete',
    GET_ERROR = '[VIDEO] Error',
    ADD = '[VIDEO] Add',
    ADD_COMPLETE = '[VIDEO] Added',
    DELETE = '[VIDEO] Delete'
}

export class GetVideo implements Action {
    readonly type = VideoActionTypes.GET;
}

export class GetVideoComplete implements Action {
    readonly type = VideoActionTypes.GET_COMPLETE;

    constructor(public readonly payload: Video[]) {}
}

export class GetError implements Action {
    readonly type = VideoActionTypes.GET_ERROR;
}

export class AddVideo implements Action {
    readonly type = VideoActionTypes.ADD;

    constructor(public readonly payload: Video) {}
}

export class AddVideoComplete implements Action {
    readonly type = VideoActionTypes.ADD_COMPLETE;

    constructor(public readonly payload: Video) {}
}

export class RemoveVideo implements Action {
    readonly type = VideoActionTypes.DELETE;

    constructor(public payload: number) { }
}

export type VideoActionsUnion = GetVideo | GetVideoComplete | GetError | AddVideo | AddVideoComplete | RemoveVideo;
