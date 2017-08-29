import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
 
const studentRoutes: Routes = [
  { path: '', 
        children: [
            { path: '', component: StudentListComponent },
            { path: 'list', component: StudentListComponent },
            { path: 'add', component: StudentAddComponent },
            { path: 'edit/:id', component: StudentAddComponent }
        ] 
  }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {}