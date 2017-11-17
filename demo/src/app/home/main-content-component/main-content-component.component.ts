import {Component, OnInit} from '@angular/core';
import {MozLayoutService} from 'ngx-moz-layouter';

@Component({
    selector: 'app-main-content-component',
    templateUrl: './main-content-component.component.html',
    styleUrls: ['./main-content-component.component.scss']
})
export class MainContentComponentComponent implements OnInit {

    constructor(public layout: MozLayoutService) {
        this.layout.setLayoutConfig({
            initialStates:{
                TH:'on'
            }
        },false);
    }

    ngOnInit() {
    }

    toggle(area: string) {
        this.layout.toggleBetween(area, 'on', 'off');
    }

}
