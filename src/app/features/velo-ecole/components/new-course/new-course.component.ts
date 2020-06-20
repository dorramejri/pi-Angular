import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  displayMode: FormDisplayMode;
  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.displayMode = 'CALENDAR';
    this.courses$ = this.courseService.fetchCourses();
  }

  changeDisplayMode(displayMode) {
    this.displayMode = displayMode;
  }

  onDeleteCourse(courseId) {
    // TODOD
  }

  deleteCourse = (courseId) => {
    // TODO
  };


}
