import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabComponent } from './tab.component';

const routes: Routes = [
  {
    path: 'tab/:tabName',
    component: TabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
