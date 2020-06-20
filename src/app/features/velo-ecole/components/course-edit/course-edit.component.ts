import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  course$: Observable<Course>;

  constructor(private courseService: CourseService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.course$ = this.courseService.getCourseById(id);
  }

  resetForm() {
    this.form.reset();
  }

}
