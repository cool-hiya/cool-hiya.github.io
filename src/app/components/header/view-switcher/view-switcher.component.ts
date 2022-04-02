import {Component, EventEmitter, Input, Output} from "@angular/core";
import {View} from "src/app/constants";

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss']
})
export class ViewSwitcherComponent {
  @Input() selectedView!: View;
  @Output() viewChange: EventEmitter<View> = new EventEmitter();

  views: string[] = Object.values(View);

  onViewChange(view: string) {
    this.viewChange.emit(view as View);
  }
}
