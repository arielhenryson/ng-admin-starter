import { Component, EventEmitter, Output } from '@angular/core'


@Component({
  selector: 'app-header',
  templateUrl: 'header.template.html'
})
export class HeaderComponent {
  @Output() navToggle = new EventEmitter()

  toggleMenu() {
    this.navToggle.emit(true)
  }
}
