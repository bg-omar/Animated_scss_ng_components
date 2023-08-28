import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[bindCssVariable]"
})
export class BindCssVariableDirective {
  @Input("bindCssVariable") variable: string;
  @Input("bindCssVariableValue") value: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnChanges(changes): void {
    const value = changes.value.currentValue;
    this.host.nativeElement.style.setProperty(`--${this.variable}`, value);
  }
}
