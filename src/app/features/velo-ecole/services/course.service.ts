import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const coursesMock = [
    {
        id: '01',
        name: 'Learn to bike at any age V1',
        date: '2020-06-18',
        time: '09:15',
        address: 'Adress 1',
        duration: '2h',
        status: 'PENDING'
    },
    {
        id: '02',
        name: 'Learn to bike at any age V2',
        date: '2020-06-19',
        time: '10:45',
        address: 'Address 2',
        duration: '2h',
        status: 'VALIDATED'
    },
    {
        id: '03',
        name: 'Learn to bike at any age V3',
        date: '2020-06-20',
        time: '15:30',
        address: 'Address 3',
        duration: '2h',
        status: 'PENDING'
    },
    {
        id: '04',
        name: 'Learn to bike at any age V4',
        date: '2020-06-21',
        time: '16:55',
        address: 'Address 4',
        duration: '2h',
        status: 'NOT_VALIDATED'
    },
    {
        id: '05',
        name: 'Learn to bike at any age V5',
        date: '2020-06-18',
        time: '09:15',
        address: 'Adress 5',
        duration: '2h',
        status: 'PENDING'
    },
    {
        id: '06',
        name: 'Learn to bike at any age V6',
        date: '2020-06-19',
        time: '10:45',
        address: 'Address 6',
        duration: '2h',
        status: 'NOT_VALIDATED'
    },
    {
        id: '07',
        name: 'Learn to bike at any age V7',
        date: '2020-06-20',
        time: '15:30',
        address: 'Address 7',
        duration: '2h',
        status: 'VALIDATED'
    },
    {
        id: '08',
        name: 'Learn to bike at any age V8',
        date: '2020-06-21',
        time: '16:55',
        address: 'Address 8',
        duration: '2h',
        status: 'VALIDATED'
    },
    {
        id: '09',
        name: 'Learn to bike at any age V9',
        date: '2020-06-18',
        time: '09:15',
        address: 'Adress 9',
        duration: '2h',
        status: 'PENDING'
    },
    {
        id: '10',
        name: 'Learn to bike at any age V10',
        date: '2020-06-19',
        time: '10:45',
        address: 'Address 10',
        duration: '2h',
        status: 'NOT_VALIDATED'
    },
    {
        id: '11',
        name: 'Learn to bike at any age V11',
        date: '2020-06-20',
        time: '15:30',
        address: 'Address 11',
        duration: '2h',
        status: 'PENDING'
    },
    {
        id: '12',
        name: 'Learn to bike at any age V12',
        date: '2020-06-21',
        time: '16:55',
        address: 'Address 12',
        duration: '2h',
        status: 'NOT_VALIDATED'
    }
];

@Injectable()
export class CourseService {

    private apiServer = 'http://localhost:3000';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) {

    }

    fetchCourses(): Observable<any> {
        return of(coursesMock);
    }

    createCourse(course: Course) {
        // TODO
        coursesMock.push(course);
    }

    getCourseById(id: string): Observable<any> {
        const course = coursesMock.find(c => c.id === id);
        return of(course);
    }

    validateCourse(id: string) {
        // TODO
        const course = coursesMock.find(c => c.id === id);
        course.status = 'VALIDATED';
    }

    inValidateCourse(id: string) {
        // TODO
        const course = coursesMock.find(c => c.id === id);
        course.status = 'NOT_VALIDATED';
    }

    participateToCourse(id: string) {
        // TODO
    }

    deleteCourse(id: string) {
        debugger;
        const course = coursesMock.find(c => c.id === id);
        debugger;
        if (course) {
            coursesMock.splice(coursesMock.indexOf(course), 1);
        }
    }

    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}
