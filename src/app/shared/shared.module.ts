import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, HttpClientModule, AppRoutingModule
  ],
  exports: [
    CommonModule, RouterModule, HttpClientModule, AppRoutingModule
  ]
})
export class SharedModule { }
