import { Component, HostListener } from '@angular/core'


@Component({
  templateUrl: 'basic.template.html'
})
export class BasicComponent {
  menuOpenMethod = 'side'


  // on small screen we don't want to show the side menu open and push
  // the content here to the side. instead we open the menu on the content area.
  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth < 992) {
      this.menuOpenMethod = 'over'
    } else {
      this.menuOpenMethod = 'side'
    }
  }
}
