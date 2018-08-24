import {Component} from '@angular/core';

import {Facilitator, Location, Session} from '../session';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  session = new Session('title', new Date(), new Date(), 'location', 'facilitator');

  readonly knownFacilitators = new Set<Facilitator>(['Ernie', 'Bert']);
  readonly knownLocations = new Set<Location>(['Berlin', 'Potsdam']);

  onSubmit() {
    this.knownFacilitators.add(this.session.facilitator);
    this.knownLocations.add(this.session.location);
  }

}
