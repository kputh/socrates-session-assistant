import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Location} from '../sessions/session';

@Injectable({
  providedIn: 'root'
})
export class KnownLocationsDataService {

  readonly knownLocations$ = new Subject<Set<Location>>();
  private readonly _knownLocations = new Set<Location>();

  constructor() {
    this.knownLocations$.next(this._knownLocations)
  }

  get knownLocations() {
    return this._knownLocations;
  }

  add(newLocation: Location) {
    this._knownLocations.add(newLocation);
    this.knownLocations$.next(this._knownLocations)
  }

}
