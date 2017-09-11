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
  MdSnackBarModule,
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
    MdSnackBarModule,
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
    MdSnackBarModule,
    MdToolbarModule
  ]
})
export class MaterialModule { }
