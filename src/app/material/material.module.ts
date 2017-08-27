import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule
  ]
})
export class MaterialModule { }
