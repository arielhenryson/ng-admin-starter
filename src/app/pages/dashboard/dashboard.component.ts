import { Component } from '@angular/core'

import { single } from './data'

@Component({
  selector: 'app-root',
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
  view: any[] = [200, 100]
  data: any[]

  constructor() {
    this.data = single
  }

  colorScheme1 = {
    domain: ['#5AA454', '#a13c8e', '#C7B42C']
  }

  colorScheme2 = {
    domain: ['#A10A28', '#23c724']
  }


  colorScheme3 = {
    domain: ['#4254c7']
  }

  onSelect(event) {
    console.log(event)
  }
}
