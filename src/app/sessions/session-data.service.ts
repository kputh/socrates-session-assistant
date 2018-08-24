import {Injectable} from '@angular/core';

import {Session} from './session';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor() {
  }

  addNewSession(newSession: Session) {
    console.debug(JSON.stringify(newSession))
  }

}
