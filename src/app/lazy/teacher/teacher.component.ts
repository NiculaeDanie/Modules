import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  id?: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get("id"));
  }

}
