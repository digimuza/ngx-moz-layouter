import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-mid-header',
  templateUrl: './mid-header.component.html',
  styleUrls: ['./mid-header.component.scss']
})
export class MidHeaderComponent extends BaseBlockComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
