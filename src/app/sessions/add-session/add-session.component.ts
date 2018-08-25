import {Component} from '@angular/core';

import {KnownLocationsDataService} from '../../core/known-locations-data.service';
import {Facilitator, Session} from '../session';
import {SessionDataService} from '../session-data.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  constructor(
    public readonly knownLocations: KnownLocationsDataService,
    private readonly sessionDataService: SessionDataService
  ) {
  }

  session = new Session('', '10:00', '11:00', '', '');

  readonly knownFacilitators = new Set<Facilitator>(['Ernie', 'Bert']);

  onSubmit() {
    this.knownFacilitators.add(this.session.facilitator);
    this.knownLocations.add(this.session.location);

    this.sessionDataService.addNewSession(this.session)
      .subscribe(() => {
        this.resetForm();
      }, err => {
        console.error(JSON.stringify(err));
      });

  }

  private resetForm() {
    this.session = new Session('', '10:00', '11:00', '', '');
  }
}
