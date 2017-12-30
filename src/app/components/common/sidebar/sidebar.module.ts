import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { MatToolbarModule } from '@angular/material'


import { SidebarComponent } from './sidebar.component'


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports     : [
    BrowserModule,
    RouterModule,

    MatToolbarModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {}
