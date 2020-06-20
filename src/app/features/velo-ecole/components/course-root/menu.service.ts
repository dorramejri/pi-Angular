import { Injectable } from '@angular/core';
import { CourseRootComponent } from './course-root.component';

@Injectable()
export class MenuService {

    constructor() { }

    getMenu(): Array<any> {
        const menu = [
            {
                name: 'home',
                path: 'home',
                children: [
                    {
                        name: 'THE FELLOWSHIP OF THE RING Details',
                        path: './book1'
                    },
                    {
                        name: 'THE FELLOWSHIP OF THE RING Details',
                        path: './book1'
                    },
                    {
                        name: 'THE FELLOWSHIP OF THE RING Details',
                        path: './book1'
                    },
                    {
                        name: 'THE FELLOWSHIP OF THE RING Details',
                        path: './book1'
                    }
                ]
            }
        ];

        return menu;
    }

}