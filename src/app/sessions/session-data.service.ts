import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {SettingsDataService} from '../core/settings-data.service';
import {Session} from './session';

const appendRowUrl = 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}:append';

/*
 * documentation of the target api: https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append
 */

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

    const url = appendRowUrl
      .replace('{spreadsheetId}', this.settings.spreadsheetId)
      .replace('{range}', 'A1:H300'); // ToDo
    const params = new HttpParams()
      .set('key', this.settings.googleSheetsApiKey) // ToDo use OAuth2 instead
      .set('valueInputOption', 'RAW')
      .set('insertDataOption', 'INSERT_ROWS');
    const body = this.convertSessionToValueRange(newSession);

    return this.http.post(url, body, {params});
  }

  private convertSessionToValueRange(session: Session) {
    return {
      'range': 'A1:H300', // ToDo
      'majorDimension': 'ROWS', // optional?
      'values': [
        session.title,
        session.startingTime,
        session.endTime,
        session.location,
        session.facilitator,
      ]
    };
  }

}
