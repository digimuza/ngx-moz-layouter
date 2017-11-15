import { Component, OnInit } from '@angular/core';
import {MozLayoutService} from '../../moz-layout.service';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent extends BaseBlockComponent implements OnInit {

  constructor(public layout: MozLayoutService) {
      super();
  }

  ngOnInit() {
  }

}
