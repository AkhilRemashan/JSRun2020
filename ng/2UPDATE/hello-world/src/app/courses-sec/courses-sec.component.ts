import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-sec',
  templateUrl: './courses-sec.component.html',
  styleUrls: ['./courses-sec.component.scss']
})
export class CoursesSecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "List of Courses";

  courses = ["course1", "course2", "course3"]

}
