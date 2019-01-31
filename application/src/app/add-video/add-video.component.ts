import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../models/video.model';
import { VideoService } from '../video/video.service';

import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

import * as VideoActions from '../store/video.actions';
import { generate } from 'rxjs';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video: Video = new Video();

  video2: Observable<Video[]>;

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

  constructor(private store: Store<AppState>, private router: Router, private videoService: VideoService) {
    this.video2 = store.select('video');
  }

  addVideo(id, videoName, genre, description, videoLink, videoThumbnail, ageLimit, rating) {
    this.store.dispatch(new VideoActions.AddVideo({
      id: id,
      videoName: videoName,
      genre: genre,
      description: description,
      videoLink: videoLink,
      videoThumbnail: videoThumbnail,
      ageLimit: ageLimit,
      rating: rating
    })
    );
  }

  deleteVideo(index) {
    this.store.dispatch(new VideoActions.RemoveVideo(index));
  }

  ngOnInit() {
  }

  createVideo(): void {
    this.videoService.createVideo(this.video)
        .subscribe( data => {
          alert('Video added successfully.');
        });
  }

}
