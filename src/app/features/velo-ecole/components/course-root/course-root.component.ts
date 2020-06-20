import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-course-root',
  templateUrl: './course-root.component.html',
  styleUrls: ['./course-root.component.css']
})
export class CourseRootComponent implements OnInit {


  ngOnInit() {

  }

}
