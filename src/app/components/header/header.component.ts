import {Component, EventEmitter, Input, Output} from "@angular/core";
import {View} from "src/app/constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() view!: View;
  @Output() viewChange: EventEmitter<View> = new EventEmitter();

  onViewChanged(view: View) {
    this.viewChange.emit(view);
  }
}
