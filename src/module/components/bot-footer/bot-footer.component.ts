import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-bot-footer',
  templateUrl: './bot-footer.component.html',
  styleUrls: ['./bot-footer.component.scss']
})
export class BotFooterComponent extends BaseBlockComponent implements OnInit {


  constructor() {
      super();
  }

  ngOnInit() {
  }

}
