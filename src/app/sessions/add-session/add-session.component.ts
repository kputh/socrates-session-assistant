import {Component} from '@angular/core';

import {Facilitator, Location, Session} from '../session';
import {SessionDataService} from '../session-data.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  constructor(private readonly sessionDataService: SessionDataService) {}

  session = new Session('', new Date(), new Date(), '', '');

  readonly knownFacilitators = new Set<Facilitator>(['Ernie', 'Bert']);
  readonly knownLocations = new Set<Location>(['Berlin', 'Potsdam']);

  onSubmit() {
    this.knownFacilitators.add(this.session.facilitator);
    this.knownLocations.add(this.session.location);

    this.sessionDataService.addNewSession(this.session);
  }

}
