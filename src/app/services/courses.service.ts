import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {catchError, map, Observable, of} from 'rxjs';
import {COURSES_PATH} from '../constants';
import {Course} from '../models';
import {sortBy} from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${COURSES_PATH}/courses.json`, {responseType: 'json'})
      .pipe(
        map((courses: Course[]) => sortBy(courses, 'sortOrder')),
        catchError(() => of([]) as Observable<Course[]>)
      )
  }
}
