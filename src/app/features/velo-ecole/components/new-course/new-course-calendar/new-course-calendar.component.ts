import { Component, ViewChild, Input, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-new-course-calendar',
  templateUrl: './new-course-calendar.component.html',
  styleUrls: ['./new-course-calendar.component.css']
})
export class NewCourseCalendarComponent implements OnInit {

  @Input() courses: Course[];
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarPlugins: any[];
  calendarEvents: EventInput[];
  currentArg = undefined;

  constructor(private courseService: CourseService, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    const yesBtn = document.getElementById('id_truebtn');
    const noBtn = document.getElementById('id_falsebtn');
    yesBtn.addEventListener('click', () => this.saveCourse());
    noBtn.addEventListener('click', () => this.hideEventBoxDialog());
    this.calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
    this.calendarEvents = this.calculateCalendarEvents();
    this.changeDetectorRef.detectChanges();
  }

  calculateCalendarEvents() {
    const events = [];
    for (const course of this.courses) {
      const obj = { title: course.name, date: course.date + ' ' + course.time, color: this.generateRandomColor() };
      events.push(obj);
    }
    return events;
  }

  handleDateClick(arg) {
    this.currentArg = arg;
    this.showEventBoxDialog();
  }

  saveCourse() {
    const name = (document.getElementById('event_name') as any).value;
    const time = (document.getElementById('event_time') as any).value;
    const address = (document.getElementById('event_address') as any).value;
    const duration = (document.getElementById('event_duration') as any).value;
    const date = this.currentArg.dateStr;
    this.calendarEvents = this.calendarEvents.concat({
      title: name,
      date: date + ' ' + time,
      color: this.generateRandomColor()
    });
    this.courseService.createCourse({ id: undefined, name, address, date, time, duration, status: 'PENDING' });
    this.hideEventBoxDialog();
  }

  showEventBoxDialog() {
    this.resetEventInputs();
    document.getElementById('id_confrmdiv').style.display = 'block';
  }

  hideEventBoxDialog() {
    document.getElementById('id_confrmdiv').style.display = 'none';
  }

  resetEventInputs() {
    (document.getElementById('event_name') as any).value = null;
    (document.getElementById('event_address') as any).value = null;
    (document.getElementById('event_duration') as any).value = null;
  }

  generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

}
