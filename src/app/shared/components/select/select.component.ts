import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatSelectChange} from "@angular/material/select";
import {SelectOption} from "./select-option";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() showAllOption: boolean = true;
  @Input() label!: string;
  @Input() options: SelectOption[] = [];
  @Input() selected: string = '';
  @Output() selectionChange: EventEmitter<string> = new EventEmitter();

  onSelected({value}: MatSelectChange) {
    this.selectionChange.emit(value);
  }
}
