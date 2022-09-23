import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor() {


  }

  getAll() {
    return ["Course1", "Course2", "Course3"];
  }
}
