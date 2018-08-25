import {TestBed, inject} from '@angular/core/testing';

import {SettingsDataService} from './settings-data.service';

describe('SettingsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsDataService]
    });
  });

  it('should be created',
    inject([SettingsDataService], (service: SettingsDataService) => {

      expect(service).toBeTruthy();
    }));

  it('can store and retrieve Google Sheets API key',
    inject([SettingsDataService], (service: SettingsDataService) => {

      service.googleSheetsApiKey = 'Google-Sheets-Api-Key';
      expect(service.googleSheetsApiKey).toBe('Google-Sheets-Api-Key');
    }));

  it('can store and retrieve spreadsheet id',
    inject([SettingsDataService], (service: SettingsDataService) => {

      service.spreadsheetId = 'spreadsheet-id';
      expect(service.spreadsheetId).toBe('spreadsheet-id');
    }));

});
