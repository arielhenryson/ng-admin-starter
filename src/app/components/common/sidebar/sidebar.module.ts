import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material'


import { SidebarComponent } from './sidebar.component'
import { UserCardComponent } from './userCard/userCard.component'


@NgModule({
  declarations: [
    SidebarComponent,
    UserCardComponent
  ],
  imports     : [
    BrowserModule,
    RouterModule,

    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {}
