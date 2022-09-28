import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  id?: number;
  teacherForm?: FormGroup;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
