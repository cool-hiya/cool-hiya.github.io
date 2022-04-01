import {Component, EventEmitter, Output} from "@angular/core";
import {Category, Course, Level} from "src/app/models";
import {SelectOption} from "src/app/shared/components/select";
import {pickBy, isEmpty} from "lodash";

@Component({
  selector: 'app-courses-filters',
  templateUrl: './courses-filters.component.html',
  styleUrls: ['./courses-filters.component.scss']
})
export class CoursesFiltersComponent {
  public levels: SelectOption[] = [];
  private filters: Partial<Course> = {};

  @Output() filtersChange: EventEmitter<Partial<Course>> = new EventEmitter();

  constructor() {
    this.levels = Object.values(Level).map((value) => ({value, label: value}));
  }

  onFilterChanged(value: string, prop: string) {
    this.filters = {...this.filters, [prop]: value};
    this.filters = pickBy(this.filters, (v)=> !!v);

    this.filtersChange.emit(this.filters);
  }
}
