import { Component, OnInit } from '@angular/core';

import { Video } from '../models/video.model';
import { VideoService } from '../video/video.service';


@Component({
  selector: 'app-admin-video',
  templateUrl: './admin-video.component.html',
  styleUrls: ['./admin-video.component.scss']
})
export class AdminVideoComponent implements OnInit {

  videos: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getVideos()
        .subscribe( data => {
          this.videos = data;
        });
  }

  deleteVideo(video: Video): void {
    this.videoService.deleteVideo(video)
      .subscribe( data => {
        this.videos = this.videos.filter(u => u !== video);
      })
  };

  editVideo(video: Video): void {
    this.videoService.editVideo(video)
      .subscribe( data => {
        this.videos = this.videos;
        //this.videos = this.videos.filter(u => u !== video);
      })
  };
}
