import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVideoComponent } from './detail-video.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { VideoService } from '../video/video.service';

describe('DetailVideoComponent', () => {
  let component: DetailVideoComponent;
  let fixture: ComponentFixture<DetailVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVideoComponent ],
      imports: [ RouterModule.forRoot([]), HttpClientModule ],
      providers: [ VideoService ]
    }).overrideComponent(DetailVideoComponent, {
      remove: {templateUrl: './detail-video.component.html'},
      add: {template: '<div></div>'}
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
