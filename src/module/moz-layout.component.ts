///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input} from '@angular/core';
import {MozLayoutService} from './moz-layout.service';
import {DynamicComponent} from './dynamic-component/dynamic-component/dynamic-component-item';

export interface MozLayoutComponentObjects {
    TH: DynamicComponent;
    MH: DynamicComponent;
    BH: DynamicComponent;
    LS: DynamicComponent;
    LC: DynamicComponent;
    MC: DynamicComponent;
    RC: DynamicComponent;
    RS: DynamicComponent;
    TF: DynamicComponent;
    MF: DynamicComponent;
    BF: DynamicComponent;
}

@Component({
    selector: 'ngx-moz-layout',
    templateUrl: './moz-layout.component.html',
    styleUrls: ['./moz-layout.component.scss']
})
export class MozLayoutComponent {

    @Input() layoutComponents: MozLayoutComponentObjects;

    constructor(public layout: MozLayoutService) {
    }

}
