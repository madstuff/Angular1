import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() parent = 'Parent component!!';

  displayCounter(count) {
    console.log(count);
  }
}
