import {Component, Input, OnInit} from '@angular/core';
import {DynamicComponent} from '../../dynamic-component/dynamic-component/dynamic-component-item';
import {NoComponentComponent} from '../no-component/no-component.component';

@Component({
    selector: 'ngx-moz-base-block',
    templateUrl: './base-block.component.html',
    styleUrls: ['./base-block.component.scss']
})
export class BaseBlockComponent implements OnInit {

    @Input() comp: DynamicComponent = new DynamicComponent(NoComponentComponent, []);

    constructor() {
    }

    ngOnInit() {
    }

}
