import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StudentModel } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  
  studentForm: FormGroup;

  constructor(private fb: FormBuilder,private StudentService:StudentService) { 
    this.createStudentForm();
  }

  stuClass:string[] = new Array("1 st","2 nd","3 rd","4 th","5 th","6 th","7 th","8 th","9 th","10 th")

  createStudentForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required ],
      fatherName: '',
      rollNum: '',
      address: '',
      class: '',
      gender: ''
    });
  }

  onSubmit(data:StudentModel):void {
    this.StudentService.AddStudent(data);
    console.log(this.StudentService.StudentDetails);
    debugger;
  }

  ngOnInit() {
  }

}
