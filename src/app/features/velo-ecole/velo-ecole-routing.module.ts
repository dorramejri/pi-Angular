import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseRootComponent } from './components/course-root/course-root.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseValidationComponent } from './components/course-validation/course-validation.component';
import { CourseParticipationComponent } from './components/course-participation/course-participation.component';

const routes: Routes = [
    {
        path: '',
        component: CourseRootComponent,
        data: { breadcrumb: 'courses' },
        children: [
            {
                path: 'courses',
                component: CoursesComponent,
                data: { breadcrumb: 'Courses' }
            },
            {
                path: 'courses/details/:id',
                component: CourseDetailsComponent,
                data: { breadcrumb: 'Course Details' }
            },
            {
                path: 'courses/new-course',
                component: NewCourseComponent,
                data: { breadcrumb: 'New Course' }
            },
            {
                path: 'courses/edit/:id',
                component: CourseEditComponent,
                data: { breadcrumb: 'Course Edit' }
            },
            {
                path: 'courses/course-validation',
                component: CourseValidationComponent,
                data: { breadcrumb: 'Course Validation' }
            },
            {
                path: 'courses/course-participation',
                component: CourseParticipationComponent,
                data: { breadcrumb: 'Course Participation' }
            },
            {
                path: '',
                redirectTo: 'courses',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VeloEcoleRoutingModule {
}
