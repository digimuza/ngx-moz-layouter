import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent extends BaseBlockComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
