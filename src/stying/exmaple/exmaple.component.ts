import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-exmaple",
  templateUrl: './exmaple.component.html',
  styleUrls: ['./exmaple.component.scss'],
})
export class ExmapleComponent {
  @HostBinding("style.--color")
  @Input() color: string;
}
