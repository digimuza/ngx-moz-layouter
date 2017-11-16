import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MozLayoutModule  } from 'ngx-moz-layouter';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeTestComponent } from './home-test/home-test.component';
import { MainContentComponentComponent } from './main-content-component/main-content-component.component';
import { SampleLsComponent } from './sample-ls/sample-ls.component';
import { SampleLcComponent } from './sample-lc/sample-lc.component';
import { SampleThComponent } from './sample-th/sample-th.component';
import { SampleMhComponent } from './sample-mh/sample-mh.component';
import { SampleBhComponent } from './sample-bh/sample-bh.component';
import { SampleBfComponent } from './sample-bf/sample-bf.component';
import { SampleMfComponent } from './sample-mf/sample-mf.component';
import { SampleTfComponent } from './sample-tf/sample-tf.component';
import { SampleRcComponent } from './sample-rc/sample-rc.component';
import { SampleRsComponent } from './sample-rs/sample-rs.component';

@NgModule({
    imports: [
        CommonModule,
        MozLayoutModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent, HomeTestComponent, MainContentComponentComponent, SampleLsComponent, SampleLcComponent, SampleThComponent, SampleMhComponent, SampleBhComponent, SampleBfComponent, SampleMfComponent, SampleTfComponent, SampleRcComponent, SampleRsComponent],
    entryComponents: [HomeTestComponent,MainContentComponentComponent,SampleLsComponent, SampleLcComponent, SampleThComponent, SampleMhComponent, SampleBhComponent, SampleBfComponent, SampleMfComponent, SampleTfComponent, SampleRcComponent, SampleRsComponent]
})
export class HomeModule { }
