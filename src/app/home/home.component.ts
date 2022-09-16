import { Component, OnInit } from '@angular/core';
import { Teacher } from '../Dto/teacher';
import { TeacherServiceService } from '../teacher-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teachers?: Teacher[];
  constructor(private service: TeacherServiceService) { }

  ngOnInit(): void {
    this.teachers= this.service.getTeachers();
    console.log(this.teachers);
    
  }
  public getIdTracking(index: number, item: Teacher){
    return item.id;
  }
}
