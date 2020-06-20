import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseParticipationComponent } from './course-participation.component';

describe('CourseParticipationComponent', () => {
  let component: CourseParticipationComponent;
  let fixture: ComponentFixture<CourseParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
