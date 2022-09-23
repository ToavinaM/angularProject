import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  courses: any;

  constructor(service: CourseServiceService) {
    this.courses = service.getAll();
  }

  ngOnInit(): void {
  }

}
