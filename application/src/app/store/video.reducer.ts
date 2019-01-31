import { Action } from '@ngrx/store';
import { Video } from '../models/video.model';
import * as VideoActions from './video.actions';

const initialState: Video = {
    id: '1',
    videoName: 'Initial name',
    genre: 'Test genre',
    description: 'Test description',
    videoLink: 'http://google.com',
    videoThumbnail: 'Test thumbnail',
    ageLimit: '99',
    rating: '1'
};

export function reducer(state: Video[] = [initialState], action: VideoActions.Actions) {

    switch (action.type) {
        case VideoActions.ADD_VIDEO:
            return [...state, action.payload];
        case VideoActions.REMOVE_VIDEO:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
