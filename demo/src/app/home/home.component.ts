import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {  MozLayoutComponentObjects  } from 'ngx-moz-layouter';
import {  DynamicComponent  } from 'ngx-moz-layouter';
import {HomeTestComponent} from "./home-test/home-test.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  components:  MozLayoutComponentObjects = {
    TH:new DynamicComponent(HomeTestComponent,[]),
    MH:new DynamicComponent(HomeTestComponent,[]),
    BH:new DynamicComponent(HomeTestComponent,[]),
    LS:new DynamicComponent(HomeTestComponent,[]),
    LC:new DynamicComponent(HomeTestComponent,[]),
    MC:new DynamicComponent(HomeTestComponent,[]),
    RC:new DynamicComponent(HomeTestComponent,[]),
    RS:new DynamicComponent(HomeTestComponent,[]),
    TF:new DynamicComponent(HomeTestComponent,[]),
    MF:new DynamicComponent(HomeTestComponent,[]),
    BF:new DynamicComponent(HomeTestComponent,[]),
  };
  constructor(private titleService:Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-moz-layouter');
  }

}
