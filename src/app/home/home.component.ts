import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Teacher } from '../Dto/teacher';
import { TeacherServiceService } from '../teacher-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teachers?: Teacher[];
  teacherForm?: FormGroup;
  constructor(private service: TeacherServiceService) { }

  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
    });
    
  }
  public getIdTracking(index: number, item: Teacher){
    return item.id;
  }
}
