import { Video } from '../models/video.model';

export interface AppState {
  readonly video: Video[];
  data: string;
  error: boolean;
}
