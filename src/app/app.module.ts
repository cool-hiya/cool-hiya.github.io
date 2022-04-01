import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MarkdownModule} from 'ngx-markdown';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoursesListComponent} from './components/courses-list';
import {CommonModule} from '@angular/common';
import {CourseDetailsComponent} from './components/course-details';
import {MaterialModule} from './material.module';
import {CourseCardComponent} from './components/course-card';
import {SharedModule} from './shared/shared.module';
import {CoursesComponent} from './components/courses';
import {CategoryFilterComponent, CoursesFiltersComponent, LevelFilterComponent} from './components/courses-filters';
import {HeaderComponent} from './components/header';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    CourseCardComponent,
    CoursesComponent,
    CoursesFiltersComponent,
    CategoryFilterComponent,
    LevelFilterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
