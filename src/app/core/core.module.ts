import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {KnownLocationsDataService} from './known-locations-data.service';
import {SettingsDataService} from './settings-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    KnownLocationsDataService,
    SettingsDataService
  ]
})
export class CoreModule {
}
