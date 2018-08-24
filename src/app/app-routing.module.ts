import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddSessionComponent} from './sessions/add-session/add-session.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
