import { Interest } from './interest';
import { INTERESTS } from './interest-list';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor() { }

  getInterests(): Observable<Interest[]> {
    return of(INTERESTS);
  }

  // TODO: Add other operations if needed
}
