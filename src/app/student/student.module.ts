import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule,MdToolbarModule,MdMenuModule,MdButtonModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student.routing';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MdIconModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    SharedModule
  ],
  declarations: [StudentListComponent, StudentAddComponent]
})
export class StudentModule { }
