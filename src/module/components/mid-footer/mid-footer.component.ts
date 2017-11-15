import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
  selector: 'ngx-moz-mid-footer',
  templateUrl: './mid-footer.component.html',
  styleUrls: ['./mid-footer.component.scss']
})
export class MidFooterComponent extends BaseBlockComponent implements OnInit {

  constructor() {
      super();
  }

  ngOnInit() {
  }

}
