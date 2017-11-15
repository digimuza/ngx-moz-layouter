import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';


@Component({
  selector: 'ngx-moz-bot-header',
  templateUrl: './bot-header.component.html',
  styleUrls: ['./bot-header.component.scss']
})
export class BotHeaderComponent extends BaseBlockComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
