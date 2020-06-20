import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-grid',
  templateUrl: './courses-grid.component.html',
  styleUrls: ['./courses-grid.component.css']
})
export class CoursesGridComponent implements OnInit {

  @Input() courses = [];
  @Output() deleteCourseEvent = new EventEmitter();

  filterOption = 'all';
  searchValue = '';
  filteredCourses = [];

  constructor() {
    
  }

  ngOnInit() {
    this.updateResults();
  }

  async updateResults() {
    this.filteredCourses = this.filterByOption(this.searchByValue(this.courses));
  }

  handleDeleteCourseClick(courseId: number) {
    this.deleteCourseEvent.emit(courseId);
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
