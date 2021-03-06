import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Video } from '../models/video.model';

import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VideoService {

  constructor(private router: Router, private http: HttpClient) {}

  private videoUrl = 'http://localhost:8080/videos';
  // private videoUrl = '/api';

  public getVideos() {
    return this.http.get<Video[]>(this.videoUrl);
  }

  public getVideo(id) {
    return this.http.get<Video>(this.videoUrl + '/' + id);
  }

  public deleteVideo(video) {
    return this.http.delete(this.videoUrl + '/' + video.id);
  }

  public createVideo(video) {
    return this.http.post<Video>(this.videoUrl, video);
  }

  public editVideo(video) {
    return this.http.put<Video>(this.videoUrl + '/' + video.id, video);
  }

}
