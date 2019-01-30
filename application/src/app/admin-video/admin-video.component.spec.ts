import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoComponent } from './admin-video.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { VideoService } from '../video/video.service';

describe('AdminVideoComponent', () => {
  let component: AdminVideoComponent;
  let fixture: ComponentFixture<AdminVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideoComponent ],
      imports: [ RouterModule.forRoot([]), HttpClientModule ],
      providers: [ VideoService ]
    }).overrideComponent(AdminVideoComponent, {
      remove: {templateUrl: './admin-video.component.html'},
      add: {template: '<div></div>'}
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
