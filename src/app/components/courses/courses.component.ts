import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Course} from "src/app/models";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() courses: Course[] = [];
  filterOptions!: Partial<Course>;

  @Output() courseSelect: EventEmitter<Course> = new EventEmitter();

  onCourseSelect(course: Course) {
    this.courseSelect.emit(course);
  }
}
