import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MarkdownModule} from 'ngx-markdown';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoursesListComponent} from './components/courses-list';
import {CommonModule} from '@angular/common';
import {CourseDetailsComponent} from './components/course-details';
import {CategorySelectComponent} from './components/category-select';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    CategorySelectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
