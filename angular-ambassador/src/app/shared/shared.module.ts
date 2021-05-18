import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class SharedModule { }
