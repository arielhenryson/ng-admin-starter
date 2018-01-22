import { Component } from '@angular/core'

import { multi, single } from './data'

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {
  single = single
  multi = multi

  view: any[] = [200, 100]
  data: any[]

  // options
  showXAxis = true
  showYAxis = true
  gradient = false
  showLegend = true
  showXAxisLabel = true
  xAxisLabel = 'Country'
  showYAxisLabel = true
  yAxisLabel = 'Population'

  constructor() {
    this.data = single
  }

  colorScheme = {
    domain: ['#42A5F5', '#66BB6A', '#FFCA28', '#FF7043']
  }

  colorScheme1 = {
    domain: ['#42A5F5', '#64B5F6']
  }

  colorScheme2 = {
    domain: ['#66BB6A', '#23c724']
  }


  colorScheme3 = {
    domain: ['#FFCA28']
  }

  onSelect(event) {
    console.log(event)
  }
}
