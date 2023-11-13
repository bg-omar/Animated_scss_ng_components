import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BindCssVariableDirective } from './bind-css-variable.directive';
import { ExmapleComponent } from './exmaple/exmaple.component';
import { BorderAnimationComponent } from './border-animation/border-animation.component';
import { Border1Component } from './border-1/border-1.component';
import { CatchMeModule } from "./catchme/catch-me.module";

import { ScrollNavModule } from "./scroll-nav/scroll-nav.module";
import { DoubleBorderComponent } from './double-border/double-border.component';
import { CirclesComponent } from './circles/circles.component';
import { InfoCirclesComponent } from './info-circles/info-circles.component';
import {BoxTripComponent} from "./box-trip/box-trip.component";
import { ResizeTableComponent } from './resize-table/resize-table.component';
import {HexaComponent} from "./hexa/hexa.component";
import {HexatrailComponent} from "./hexatrail/hexatrail.component";
import {NeonhexaComponent} from "./neonhexa/neonhexa.component";

@NgModule({
  imports: [BrowserModule, FormsModule, CatchMeModule, ScrollNavModule],
  declarations: [AppComponent, HelloComponent, BindCssVariableDirective, ExmapleComponent, BorderAnimationComponent, Border1Component, DoubleBorderComponent, CirclesComponent, InfoCirclesComponent, BoxTripComponent, ResizeTableComponent, HexaComponent, HexatrailComponent, NeonhexaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
