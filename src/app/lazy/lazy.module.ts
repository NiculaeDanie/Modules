import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    SharedModule,
    FormsModule,
        ReactiveFormsModule
  ]
})
export class LazyModule { }
