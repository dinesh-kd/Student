import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { StudentService } from '../student.service';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList = [];
  constructor(private StudentService:StudentService,public dialog: MdDialog,private toaster:MdSnackBar) { }
  
  singleDelete(id:number):void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.StudentService.DeleteStudent(id);
        this.toaster.open('Deleted successfully','',{
          duration: 2000
        });
        this.getStudentDetails();
      }
    });
  }

  deleteAll():void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.StudentService.DeleteAllStudent();
        this.toaster.open('All student data removed','',{
          duration: 2000
        });
        this.getStudentDetails();
      }
    });
  }

  getStudentDetails():void{
    this.studentList= this.StudentService.StudentDetails
  }

  ngOnInit() {
    this.getStudentDetails();
  }

}
