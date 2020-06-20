import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-participation',
  templateUrl: './course-participation.component.html',
  styleUrls: ['./course-participation.component.css']
})
export class CourseParticipationComponent implements OnInit {

  courses: Course[];

  filterOption = 'all';
  searchValue = '';
  filteredCourses = [];

  constructor(private courseService: CourseService) {
    this.updateResults();
  }

  ngOnInit() {
    this.courseService.fetchCourses().subscribe(
      data => this.courses = data
    );
  }

  onValidateCourse(courseId: number) {

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
