import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SessionsRoutingModule} from './sessions-routing.module';
import {AddSessionComponent} from './add-session/add-session.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SessionsRoutingModule
  ],
  declarations: [AddSessionComponent]
})
export class SessionsModule {
}
