import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'kt-stying',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  items = [1, 2, 3, 4];
}
