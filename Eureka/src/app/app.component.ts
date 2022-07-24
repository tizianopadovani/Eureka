import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eureka';

  scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: "smooth"});
  }
}
