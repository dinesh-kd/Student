import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList = [];
  constructor(private StudentService:StudentService) { }

  ngOnInit() {
    this.studentList= this.StudentService.StudentDetails
  }

}
