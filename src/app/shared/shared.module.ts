import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MdDialogModule,MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    MdButtonModule
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  exports:[ConfirmDialogComponent]
})
export class SharedModule { }
