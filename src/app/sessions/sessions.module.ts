import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { AddSessionComponent } from './add-session/add-session.component';

@NgModule({
  imports: [
    CommonModule,
    SessionsRoutingModule
  ],
  declarations: [AddSessionComponent]
})
export class SessionsModule { }
