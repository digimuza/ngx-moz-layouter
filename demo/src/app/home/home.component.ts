import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {  MozLayoutComponentObjects  } from 'ngx-moz-layouter';
import {  DynamicComponent  } from 'ngx-moz-layouter';
import {MainContentComponentComponent} from "./main-content-component/main-content-component.component";
import {SampleThComponent} from "./sample-th/sample-th.component";
import {SampleMhComponent} from "./sample-mh/sample-mh.component";
import {SampleBhComponent} from "./sample-bh/sample-bh.component";
import {SampleLsComponent} from "./sample-ls/sample-ls.component";
import {SampleLcComponent} from "./sample-lc/sample-lc.component";
import {SampleRcComponent} from "./sample-rc/sample-rc.component";
import {SampleRsComponent} from "./sample-rs/sample-rs.component";
import {SampleMfComponent} from "./sample-mf/sample-mf.component";
import {SampleBfComponent} from "./sample-bf/sample-bf.component";
import {SampleTfComponent} from "./sample-tf/sample-tf.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  components:  MozLayoutComponentObjects = {
    TH:new DynamicComponent(SampleThComponent,[]),
    MH:new DynamicComponent(SampleMhComponent,[]),
    BH:new DynamicComponent(SampleBhComponent,[]),
    LS:new DynamicComponent(SampleLsComponent,[]),
    LC:new DynamicComponent(SampleLcComponent,[]),
    MC:new DynamicComponent(MainContentComponentComponent,[]),
    RC:new DynamicComponent(SampleRcComponent,[]),
    RS:new DynamicComponent(SampleRsComponent,[]),
    TF:new DynamicComponent(SampleTfComponent,[]),
    MF:new DynamicComponent(SampleMfComponent,[]),
    BF:new DynamicComponent(SampleBfComponent,[]),
  };
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-moz-layouter');
  }

}
