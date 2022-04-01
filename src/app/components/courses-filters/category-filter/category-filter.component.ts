import {Component} from "@angular/core";
import {Category} from "src/app/models";
import {CoursesFilterComponent} from "../courses-filter-component";

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent extends CoursesFilterComponent {

  constructor() {
    super();
    this.options = Object.values(Category).map((value) => ({value, label: value}));
  }
}
