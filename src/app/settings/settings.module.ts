import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {EditSettingsComponent} from './edit-settings/edit-settings.component';
import {SettingsRoutingModule} from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [EditSettingsComponent]
})
export class SettingsModule { }
