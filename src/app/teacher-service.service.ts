import { Injectable } from '@angular/core';
import { Teacher } from './Dto/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  constructor() { }
  public getTeachers(): Teacher[]{
    return [{id: 1, name: "Test"},{id: 2, name: "Test2"}];
  }
}
