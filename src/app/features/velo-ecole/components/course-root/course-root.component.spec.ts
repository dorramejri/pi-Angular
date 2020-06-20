import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRootComponent } from './course-root.component';

describe('CourseRootComponent', () => {
  let component: CourseRootComponent;
  let fixture: ComponentFixture<CourseRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
