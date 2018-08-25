import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {KnownLocationsDataService} from './known-locations-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [KnownLocationsDataService]
})
export class CoreModule {
}
