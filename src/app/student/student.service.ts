import { Injectable } from '@angular/core';

import { StudentModel } from './student.model';

@Injectable()
export class StudentService {
    
    private StudentData = [];
    
    get StudentDetails(): any[] {
        return Object.assign([], this.StudentData);
    }

    AddStudent(data:StudentModel):void{
        this.StudentData.push(data);
    }

    GetStudent(id:any):StudentModel{
        return this.StudentData[id];
    }

    UpdateStudent(data:StudentModel,id:any):void{
        this.StudentData[id] = data;
    }

    DeleteStudent(id:any):void{
            this.StudentData.splice(id, 1);
    }

    DeleteAllStudent():void{
        this.StudentData = [];
    }


}