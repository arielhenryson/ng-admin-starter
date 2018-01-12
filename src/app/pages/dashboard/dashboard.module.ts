import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'


import { DashboardComponent } from './dashboard.component'
import { MatCardModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MatCardModule,
    FlexLayoutModule,
    BrowserModule,
    RouterModule,
  ],
  exports: []
})
export class DashboardModule {}
