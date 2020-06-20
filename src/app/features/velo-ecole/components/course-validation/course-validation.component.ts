import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-validation',
  templateUrl: './course-validation.component.html',
  styleUrls: ['./course-validation.component.css']
})
export class CourseValidationComponent implements OnInit {

  courses: Course[];

  filterOption = 'all';
  searchValue = '';
  filteredCourses = [];

  constructor(private courseService: CourseService) {
    this.courseService.fetchCourses().subscribe(
      data => this.courses = data
    );
    this.updateResults();
  }

  ngOnInit() {
    
  }

  onValidateCourse(courseId: string) {
    this.courseService.validateCourse(courseId);
  }

  onInValidateCourse(courseId: string) {
    this.courseService.inValidateCourse(courseId);
  }

  async updateResults() {
    this.filteredCourses = this.filterByOption(this.searchByValue(this.courses));
  }

  searchByValue(items) {
    return items.filter(item => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.name.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) ||
          item.address.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) ||
          item.status.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    });
  }

  filterByOption(items) {
    return items.filter(item => {
      if (this.filterOption === 'all' || this.filterOption === item.type) {
        return true;
      }
    });
  }

}
