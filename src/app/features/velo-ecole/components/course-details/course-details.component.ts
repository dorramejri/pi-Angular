import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  course$: Observable<Course>;

  constructor(private courseService: CourseService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.course$ = this.courseService.getCourseById(id);
  }

}
