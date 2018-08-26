import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {EditSettingsComponent} from './edit-settings/edit-settings.component';
import {SettingsRoutingModule} from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule
  ],
  declarations: [EditSettingsComponent]
})
export class SettingsModule { }
