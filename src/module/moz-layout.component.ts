import {Component} from '@angular/core';
import {MozLayoutService} from './moz-layout.service';

@Component({
    selector: 'ngx-moz-layout',
    templateUrl: './moz-layout.component.html',
    styleUrls: ['./moz-layout.component.scss']
})
export class MozLayoutComponent {

    constructor(public layout: MozLayoutService) {}
}

