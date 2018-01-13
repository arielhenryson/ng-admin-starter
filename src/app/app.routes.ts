import { Routes } from '@angular/router'
import { BasicComponent } from './components/common/layouts/basic.component'
import { BlankComponent } from './components/common/layouts/blank.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'


export const ROUTES: Routes = [
  // Main redirect
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // App views
  {
    path: '',
    component: BasicComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'table', component: DashboardComponent },
    ]
  },
  {
    path: '', component: BlankComponent,
    children: [
      // { path: 'login', component: LoginComponent },
      // { path: 'verification', component: VerificationComponent }
    ]
  }
]
