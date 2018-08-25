import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {SettingsDataService} from '../core/settings-data.service';
import {Session} from './session';

const appendRowUrl = 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {

  constructor(
    private readonly http: HttpClient,
    private readonly settings: SettingsDataService
  ) {
  }

  addNewSession(newSession: Session) {

    // ToDo authenticate using OAuth2 or API key
    // ToDo construct ValueRange instance as body
    const oauth2Token = 'cake';

    const url = appendRowUrl
      .replace('{spreadsheetId}', this.settings.spreadsheetId)
      .replace('{range}', '');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${oauth2Token}`);
    const params = new HttpParams()
      .set('valueInputOption', 'RAW')
      .set('insertDataOption', 'INSERT_ROWS');

    return this.http.post(url, newSession, {headers, params});
  }

}
