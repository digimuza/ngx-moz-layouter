import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-top-footer',
  templateUrl: './top-footer.component.html',
  styleUrls: ['./top-footer.component.scss']
})
export class TopFooterComponent extends BaseBlockComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
