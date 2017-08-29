import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule
  ],
  declarations: [HeaderComponent, SidebarComponent],
  exports:[HeaderComponent, SidebarComponent]
})
export class CoreModule { }
