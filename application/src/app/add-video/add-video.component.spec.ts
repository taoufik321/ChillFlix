import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideoComponent } from './add-video.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';

import { VideoService } from '../video/video.service';
import { Video } from '../models/video.model';
import { Observable } from 'rxjs';

describe('AddVideoComponent', () => {
  let component: AddVideoComponent;
  let fixture: ComponentFixture<AddVideoComponent>;
  let videoService: VideoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVideoComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, HttpClientModule ],
      providers: [ VideoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    videoService = TestBed.get(VideoService);
    // spyOn(videoService, 'createVideo').and.returnValue(new Observable<Video>());
    fixture = TestBed.createComponent(AddVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call videoService when calling createVideo Function', () => {
    spyOn(videoService, 'createVideo').and.returnValue(new Observable<Video>());

    // component.addVideoForm.controls['videoName'].setValue('TestTestTest');

    component.createVideo();

    expect(videoService.createVideo).toHaveBeenCalled();
  });
});
