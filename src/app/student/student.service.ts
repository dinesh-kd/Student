import { Injectable } from '@angular/core';

import { StudentModel } from './student.model';

@Injectable()
export class StudentService {
    
    private StudentData = [];
    
    get StudentDetails(): any[] {
        return Object.assign([], this.StudentData);
    }

    AddStudent(data:StudentModel){
        this.StudentData.push(data);
    }


}