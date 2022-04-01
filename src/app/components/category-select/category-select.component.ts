import {SelectOption} from './../../shared/components/select';
import {Component} from "@angular/core";
import {Category} from "src/app/models";

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent {
  public categories: SelectOption<string>[] = [];

  constructor() {
    this.categories = Object.values(Category).map((value) => ({value, label: value}));
  }
}
