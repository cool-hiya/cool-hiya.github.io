import {Component, EventEmitter, Input, Output, } from "@angular/core";
import {Course} from 'src/app/models';
import {find} from 'lodash';
import {Edge, Node} from "@swimlane/ngx-graph";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {
  @Input() track: Edge[] = [];
  @Input() set courses(courses: Course[]) {
    this._courses = courses;
    this.nodes = this.courses.map((course: Course) => ({id: course.id, label: course.name}));
  };

  get courses(): Course[] {
    return this._courses;
  }

  @Output() courseSelect: EventEmitter<Course> = new EventEmitter();
  public nodes: Node[] = [];

  private _courses: Course[] = [];

  getCourseById(id: string): Course | null {
    return find(this.courses, {id}) ?? null;
  }

  onSelected(course: Course) {
    this.courseSelect.emit(course);
  }
}
