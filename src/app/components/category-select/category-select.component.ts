import {Component} from "@angular/core";
import {CategoryName} from "src/app/models";

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent {
  public categories: any[] = [];

  constructor() {
    this.categories = Object.entries(CategoryName).map(([value, label]) => ({value, label}));
  }
}
