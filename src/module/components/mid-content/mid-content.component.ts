import {Component, Input, OnInit} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';

@Component({
    selector: 'ngx-moz-mid-content',
    templateUrl: './mid-content.component.html',
    styleUrls: ['./mid-content.component.scss']
})
export class MidContentComponent extends BaseBlockComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
