import {Component, Input} from "@angular/core";
import {SelectOption} from "./select-option";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() label!: string;
  @Input() options: SelectOption<any>[] = [];
}
