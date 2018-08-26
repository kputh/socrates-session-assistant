import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

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
    public readonly snackBar: MatSnackBar,
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
        this.snackBar.open(
          `Saved session "${this.session.title}".`,
          null,
          {duration: 1500});
      }, err => {
        console.error(JSON.stringify(err));
        this.snackBar.open(
          `Failed to save session "${this.session.title}".`,
          'Dismiss');
      });

  }

  private resetForm() {
    this.session = new Session('', '10:00', '11:00', '', '');
  }
}
