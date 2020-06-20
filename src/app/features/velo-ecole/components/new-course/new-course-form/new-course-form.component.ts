import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  course: Course = {
    id: null,
    name: null,
    address: null,
    date: null,
    time: null,
    duration: null,
    status: 'PENDING'
  };

  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit() {
  }

  onSaveCourse() {
    this.courseService.createCourse(this.course);
    this.router.navigateByUrl('/velo-ecole/courses');
  }

  resetForm() {
    this.form.reset();
  }

}
