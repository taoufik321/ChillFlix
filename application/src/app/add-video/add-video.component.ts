import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../models/video.model';
import { VideoService } from '../video/video.service';


@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video: Video = new Video();

  constructor(private router: Router, private videoService: VideoService) { }

  ngOnInit() {
  }

  createVideo(): void {
    this.videoService.createVideo(this.video)
        .subscribe( data => {
          alert('Video added successfully.');
        });
  }

}
