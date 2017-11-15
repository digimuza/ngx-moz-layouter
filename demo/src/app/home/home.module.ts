import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MozLayoutModule  } from 'ngx-moz-layouter';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeTestComponent } from './home-test/home-test.component';

@NgModule({
    imports: [
        CommonModule,
        MozLayoutModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent, HomeTestComponent],
    entryComponents: [HomeTestComponent]
})
export class HomeModule { }
