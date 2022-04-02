import {CoursesService} from './services/courses.service';
import {Component, ViewChild} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Course} from './models';
import {MatSidenavContainer} from '@angular/material/sidenav';
import {View} from './constants';
import {Edge} from '@swimlane/ngx-graph';
import {TracksService} from './services/tracks.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  view = View;
  selectedView: View = View.COURSES;

  selectedCourse!: Course;
  data$!: Observable<{courses: Course[], track: Edge[]} | null>;

  private courses$!: Observable<Course[] | null>;
  private track$!: Observable<Edge[] | null>;

  @ViewChild('sidenav') sidenav!: MatSidenavContainer;

  constructor(
    private coursesService: CoursesService,
    private tracksService: TracksService
  ) {
    this.loadData();
  }

  onCourseSelect(course: Course) {
    this.selectCourse(course);
    this.openSideNav();
  }

  onViewChange(view: View) {
    this.selectedView = view;
  }

  private loadData() {
    this.courses$ = this.coursesService.getCourses();
    this.track$ = this.tracksService.getTrack();
    this.data$ = combineLatest([this.courses$, this.track$])
      .pipe(map(([courses, track]) => !courses || !track ? null : ({courses, track})));
  }

  private selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  private openSideNav() {
    this.sidenav.open();
  }
}
