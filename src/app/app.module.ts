import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component'
import { ROUTES } from './app.routes'
import { DashboardModule } from './pages/dashboard/dashboard.module'
import { LayoutsModule } from './components/common/layouts/layouts.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,


    // app Modules
    LayoutsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
