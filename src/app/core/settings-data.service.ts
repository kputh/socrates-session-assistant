import {Injectable} from '@angular/core';

const spreadsheetIdKey = 'spreadsheet-id';

@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  set spreadsheetId(id: string) {
    localStorage.setItem(spreadsheetIdKey, id);
  }

  get spreadsheetId(): string {
    return localStorage.getItem(spreadsheetIdKey);
  }

}
