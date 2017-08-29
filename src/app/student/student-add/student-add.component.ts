import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import 'rxjs/add/operator/switchMap';

import { StudentModel } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  
  studentForm: FormGroup;
  selectedStudent: StudentModel;
  editMode:boolean = false;
  editId:any;

  constructor(private fb: FormBuilder,private StudentService:StudentService,private router:Router,private toaster:MdSnackBar, private route: ActivatedRoute,) { 
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
    if(this.editMode)
    {
      this.StudentService.UpdateStudent(data,this.editId);
      this.toaster.open('Updated successfully','',{
        duration: 2000
      });
    }else{
      this.StudentService.AddStudent(data);
      this.toaster.open('Added successfully','',{
        duration: 2000
      });
    }
    this.router.navigate(['/student/list']);
  }

  ngOnInit() {
    this.editId = this.route.snapshot.paramMap.get('id');
    this.selectedStudent = this.StudentService.GetStudent( this.editId);
    if(this.selectedStudent)
    {
      this.studentForm.patchValue(this.selectedStudent);
      this.editMode = true;
    }
  }

}
