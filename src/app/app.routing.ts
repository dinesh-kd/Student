import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
const appRoutes: Routes = [
  { path: 'student', loadChildren: 'app/student/student.module#StudentModule' },
  { path: '', loadChildren: 'app/student/student.module#StudentModule' },
  { path: '**', redirectTo: '/student', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}