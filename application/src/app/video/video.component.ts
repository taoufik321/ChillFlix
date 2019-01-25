import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../models/video.model';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos: Video[];

  constructor(private router: Router, private videoService: VideoService) { }

  ngOnInit() {
      this.videoService.getVideos()
        .subscribe( data => {
          this.videos = data;
        });
    };

    // deleteVideo(video: Video): void {
    //   this.videoService.deleteVideo(video)
    //     .subscribe( data => {
    //       this.videos = this.videos.filter(u => u !== video);
    //     })
    // };

    // editVideo(video: Video): void {
    //   this.videoService.editVideo(video)
    //     .subscribe( data => {
    //       //this.videos = this.videos;
    //       this.videos = this.videos.filter(u => u !== video);
          
    //     })
    // };
  
  editRowId: any;

  toggle(id){
    this.editRowId = id;
    console.log(id);
  }
}
