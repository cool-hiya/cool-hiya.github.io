import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatSelectModule} from "@angular/material/select";
import {SelectComponent} from "./components/select";
import {FilterPipe} from "./pipes";

const pipes = [
  FilterPipe
]

const components = [
  SelectComponent
]

@NgModule({
  declarations: [
    ...pipes,
    ...components
  ],
  exports: [
    ...pipes,
    ...components
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ]
})
export class SharedModule { }
