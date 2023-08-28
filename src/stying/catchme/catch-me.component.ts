import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
    Component,
    Directive,
    OnInit,
    Renderer2,
    HostListener,
    HostBinding,
    ElementRef,
    NgModule,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@Component({
    selector: 'catch-me',
    templateUrl: './catch-me.component.html',
    styleUrls: ['./catch-me.component.scss']
})
export class CatchMeComponent {

    constructor(private el: ElementRef) {}
    mouseover:boolean;

    @HostListener('mouseover')
    onMouseOver() {
        this.mouseover = true;
        this.el.nativeElement.querySelector("#move").animate({
            top: Math.random() * 300
        }, 100);
        this.el.nativeElement.querySelector("#move").animate({
            left: Math.random() * 300
        }, 100);
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.mouseover = false;
    }
}
