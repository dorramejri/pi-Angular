import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {

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

  handleDeleteCourseClick(courseId: string) {
    debugger;
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
