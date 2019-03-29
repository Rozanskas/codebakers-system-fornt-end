import { CourseHomeComponentModel } from './course-home-component-model';

export interface Course {
    id: number;
    name: string;
    description: string;
    rating: number;
    courseHomeComponent:CourseHomeComponentModel;
}
