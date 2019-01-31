import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Video } from '../models/video.model';

export const ADD_VIDEO       = '[VIDEO] Add';
export const REMOVE_VIDEO    = '[VIDEO] Remove';

export class AddVideo implements Action {
    readonly type = ADD_VIDEO;

    constructor(public payload: Video) {}
}

export class RemoveVideo implements Action {
    readonly type = REMOVE_VIDEO;

    constructor(public payload: number) {}
}

export type Actions = AddVideo | RemoveVideo;
