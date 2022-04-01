import {Component, Input} from "@angular/core";
import {Course} from "src/app/models";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() public course!: Course;

  get levelClassName(): string {
    if (!this.course?.level) {
      return '';
    }

    return `course--${this.course.level.toLowerCase()}`;
  }
}
