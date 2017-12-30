import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'


import { DashboardComponent } from './dashboard.component'


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: []
})
export class DashboardModule {}
