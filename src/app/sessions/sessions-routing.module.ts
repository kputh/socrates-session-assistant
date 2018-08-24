import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddSessionComponent} from './add-session/add-session.component';

const routes: Routes = [
  {path: 'add-session', component: AddSessionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {
}
