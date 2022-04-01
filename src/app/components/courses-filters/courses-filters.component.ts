import {Component} from "@angular/core";
import {Category} from "src/app/models";
import {SelectOption} from "src/app/shared/components/select";

@Component({
  selector: 'app-courses-filters',
  templateUrl: './courses-filters.component.html',
  styleUrls: ['./courses-filters.component.scss']
})
export class CoursesFiltersComponent {
  public categories: SelectOption<string>[] = [];

  constructor() {
    this.categories = Object.values(Category).map((value) => ({value, label: value}));
  }
}
