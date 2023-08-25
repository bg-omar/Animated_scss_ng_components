import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollNavComponent} from './scroll-nav.component';

@NgModule({
    declarations: [
        ScrollNavComponent
    ],
    exports: [
        ScrollNavComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ScrollNavModule {
}
