import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Session} from './session';

const appendRowUrl = 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor(private readonly http: HttpClient) {
  }

  addNewSession(newSession: Session) {
    return this.http.post(appendRowUrl, newSession);
  }

}
