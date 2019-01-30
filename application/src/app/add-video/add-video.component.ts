import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../models/video.model';
import { VideoService } from '../video/video.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video: Video = new Video();

  addVideoForm = new FormGroup({
		videoName: new FormControl(),
    genre: new FormControl(),
    description: new FormControl(),
    videoLink: new FormControl(),
    videoThumbnail: new FormControl(),
    ageLimit: new FormControl()
    // rating: new FormControl()
	});

  onFormSubmit() {
    this.video.videoName = this.addVideoForm.get('videoName').value;
    this.video.genre = this.addVideoForm.get('genre').value;
    this.video.description = this.addVideoForm.get('description').value;
    this.video.videoLink = this.addVideoForm.get('videoLink').value;
    this.video.videoThumbnail = this.addVideoForm.get('videoThumbnail').value;
    this.video.ageLimit = this.addVideoForm.get('ageLimit').value;
    // this.video.rating = this.addVideoForm.get('rating').value;

    this.createVideo();
	}

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
