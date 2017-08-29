import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule,MdToolbarModule,MdMenuModule,MdButtonModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student.routing';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MdIconModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [StudentService],
  declarations: [StudentListComponent, StudentAddComponent]
})
export class StudentModule { }
