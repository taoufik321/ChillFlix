import { Component, OnInit, Output, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/video.model';

import { VideoService } from '../video/video.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.scss']
})
export class DetailVideoComponent implements OnInit {
  @Input() video: Video[];

  videos: Video;

  constructor(private router: ActivatedRoute,
              private http: HttpClient,
              private videoService: VideoService,
              public sanitizer: DomSanitizer) { }

  videoUrl: string;

  ngOnInit() {

    const id = +this.router.snapshot.params['id'];

    this.videoUrl = 'http://localhost:8080/videos/' + id;

    this.videoService.getVideo(id)
      .subscribe( data => {
          this.videos = data;
    });
  }

}
