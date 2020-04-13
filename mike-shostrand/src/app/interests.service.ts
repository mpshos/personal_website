import { Interest } from './interest';
import { INTERESTS } from './interest-list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor() { }

  // TODO: make this async
  getInterests(): Interest[] {
    return INTERESTS;
  }

  // TODO: Add other operations if needed
}
