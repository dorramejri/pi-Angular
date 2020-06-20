import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { CourseRootComponent } from './components/course-root/course-root.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { VeloEcoleRoutingModule } from './velo-ecole-routing.module';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesCardComponent } from './components/courses/courses-card/courses-card.component';
import { CoursesGridComponent } from './components/courses/courses-grid/courses-grid.component';
import { CourseService } from './services/course.service';
import { CourseValidationComponent } from './components/course-validation/course-validation.component';
import { CourseParticipationComponent } from './components/course-participation/course-participation.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MenuService } from './components/course-root/menu.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewCourseFormComponent } from './components/new-course/new-course-form/new-course-form.component';
import { NewCourseCalendarComponent } from './components/new-course/new-course-calendar/new-course-calendar.component';

const COMPONENTS = [
  NewCourseComponent,
  CourseRootComponent,
  CourseDetailsComponent,
  CourseEditComponent,
  CoursesComponent,
  CoursesCardComponent,
  CoursesGridComponent,
  CourseValidationComponent,
  CourseParticipationComponent,
  NewCourseFormComponent,
  NewCourseCalendarComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    VeloEcoleRoutingModule,
    FullCalendarModule,
    NgxPaginationModule
  ],
  exports: [COMPONENTS],
  providers: [
    CourseService,
    MenuService
  ]
})
export class VeloEcoleModule { }
