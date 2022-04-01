import {Component} from "@angular/core";
import {Level} from "src/app/models";
import {CoursesFilterComponent} from "../courses-filter-component";

@Component({
  selector: 'app-level-filter',
  templateUrl: './level-filter.component.html',
  styleUrls: ['./level-filter.component.scss']
})
export class LevelFilterComponent extends CoursesFilterComponent {

  constructor() {
    super();
    this.options = Object.values(Level).map((value) => ({value, label: value}));;
  }
}
