import {CoursesService} from './services/courses.service';
import {Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './models';
import {MatSidenavContainer} from '@angular/material/sidenav';
import {View} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view = View;
  selectedView: View = View.COURSES;

  courses$: Observable<Course[]>;
  selectedCourse!: Course;

  @ViewChild('sidenav') sidenav!: MatSidenavContainer;

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.getCourses();
  }

  onCourseSelected(course: Course) {
    this.selectCourse(course);
    this.openSideNav();
  }

  onViewChanged(view: View) {
    this.selectedView = view;
  }

  private selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  private openSideNav() {
    this.sidenav.open();
  }
}
