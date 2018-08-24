import {Component} from '@angular/core';

import {Session} from '../session';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent {

  session = new Session('title', new Date(), new Date(), 'location', 'facilitator');
  knownLocations: string[] = ['Berlin', 'Potsdam'];

  onSubmit() {
  }

}
