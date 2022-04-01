import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MarkdownModule} from 'ngx-markdown';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {CourseDetailsComponent} from './components/course-details';
import {MaterialModule} from './material.module';
import {CourseCardComponent} from './components/course-card';
import {SharedModule} from './shared/shared.module';
import {CategoryFilterComponent, CoursesComponent, CoursesFiltersComponent, CoursesListComponent, LevelFilterComponent} from './components/courses';
import {HeaderComponent, ViewSwitcherComponent} from './components/header';
import {TrackComponent} from './components/track';
import {NgxGraphModule} from '@swimlane/ngx-graph';

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
    HeaderComponent,
    ViewSwitcherComponent,
    TrackComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
