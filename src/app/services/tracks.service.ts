import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {TRACKS_PATH} from '../constants';
import {Edge} from '@swimlane/ngx-graph';

@Injectable({
  providedIn: 'root',
})
export class TracksService {

  constructor(private http: HttpClient) { }

  getTrack(): Observable<Edge[] | null> {
    return this.http.get<Edge[]>(`${TRACKS_PATH}/base.json`, {responseType: 'json'})
      .pipe(catchError(() => of(null)))
  }
}
