import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class PectoralService {

  private heroesUrl = 'api/pectoralExercises';  // URL to web api

  constructor(  private http: HttpClient) { }

  getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.heroesUrl);
  }
}
