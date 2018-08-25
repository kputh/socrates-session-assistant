import {Injectable} from '@angular/core';

const googleSheetsApiKeyKey = 'spreadsheet-id';
const spreadsheetIdKey = 'spreadsheet-id';

@Injectable({
  providedIn: 'root'
})
export class SettingsDataService {

  set googleSheetsApiKey(key: string) {
    localStorage.setItem(googleSheetsApiKeyKey, key);
  }

  get googleSheetsApiKey(): string {
    return localStorage.getItem(googleSheetsApiKeyKey);
  }

  set spreadsheetId(id: string) {
    localStorage.setItem(spreadsheetIdKey, id);
  }

  get spreadsheetId(): string {
    return localStorage.getItem(spreadsheetIdKey);
  }

}
