import {Component} from '@angular/core';

import {SettingsDataService} from '../../core/settings-data.service';

@Component({
  selector: 'app-edit-settings',
  templateUrl: './edit-settings.component.html',
  styleUrls: ['./edit-settings.component.css']
})
export class EditSettingsComponent {

  constructor(public settings: SettingsDataService) {
  }

}
