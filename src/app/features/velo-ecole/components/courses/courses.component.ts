import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayMode: DisplayMode;
  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.displayMode = 'CARD';
    this.courses$ = this.courseService.fetchCourses();
  }

  changeDisplayMode(displayMode) {
    this.displayMode = displayMode;
  }

  onDeleteCourse(courseId) {
    this.courseService.deleteCourse(courseId);
    this.courses$ = this.courseService.fetchCourses();
  }

}
