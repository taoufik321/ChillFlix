import { Action } from '@ngrx/store';
import { Video } from '../models/video.model';

import { VideoActionsUnion, VideoActionTypes } from './video.actions';

// import * as VideoActions from './video.actions';

const initialState: Video = {
    id: '',
    videoName: 'Initial name',
    genre: 'Test genre',
    description: 'Test description',
    videoLink: 'http://google.com',
    videoThumbnail: 'Test thumbnail',
    ageLimit: '99',
    rating: '1'
};

export function reducer(state: Video[] = [], action: VideoActionsUnion) {

    switch (action.type) {
        case VideoActionTypes.GET:
            return [...state];
        case VideoActionTypes.GET_COMPLETE:
            for (const entry of action.payload) {
                state.push(entry);
            }
            return state;
        case VideoActionTypes.GET_ERROR:
            return [...state];
        case VideoActionTypes.ADD:
            return [...state];
        case VideoActionTypes.ADD_COMPLETE:
            state.push(action.payload);
            return state;
        case VideoActionTypes.DELETE:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
