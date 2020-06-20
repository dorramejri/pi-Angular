import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseCalendarComponent } from './new-course-calendar.component';

describe('NewCourseCalendarComponent', () => {
  let component: NewCourseCalendarComponent;
  let fixture: ComponentFixture<NewCourseCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
