import {NgModule} from "@angular/core";
import {FilterPipe} from "./pipes";

const pipes = [
  FilterPipe
]

@NgModule({
  declarations: [
    ...pipes,
  ],
  exports: [
    ...pipes
  ],
})
export class SharedModule { }
