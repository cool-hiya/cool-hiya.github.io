import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Course} from 'src/app/models';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {
  @Input() courses: Course[] = [];
  @Output() courseSelect: EventEmitter<Course> = new EventEmitter();
}
