import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent extends BaseBlockComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
