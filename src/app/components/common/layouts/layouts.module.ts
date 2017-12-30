import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { MatSidenavModule } from '@angular/material'


import { BlankComponent } from './blank.component'
import { BasicComponent } from './basic.component'
import { HeaderModule } from '../header/header.module'
import { SidebarModule } from '../sidebar/sidebar.module'


@NgModule({
  declarations: [
    BlankComponent,
    BasicComponent
  ],
  imports     : [
    BrowserModule,
    RouterModule,

    MatSidenavModule,
    HeaderModule,
    SidebarModule
  ],
  exports     : [
    BlankComponent,
    BasicComponent
  ]
})
export class LayoutsModule {}
