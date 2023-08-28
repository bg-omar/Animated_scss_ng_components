import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatchMeComponent} from './catch-me.component';

@NgModule({
    declarations: [
        CatchMeComponent
    ],
    exports: [
        CatchMeComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class CatchMeModule {
}
