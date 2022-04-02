import {Component, EventEmitter, Output} from "@angular/core";
import {SelectOption} from "src/app/shared/components/select";

@Component({
  selector: '',
  template: '',
})
export class CoursesFilterComponent {
  public options: SelectOption[] = [];
  @Output() filterChange: EventEmitter<string> = new EventEmitter();

  onFilterChange(value: string) {
    this.filterChange.emit(value);
  }
}
