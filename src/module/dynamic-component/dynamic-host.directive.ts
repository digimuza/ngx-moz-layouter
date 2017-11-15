import {Directive, ViewContainerRef} from '@angular/core';

// noinspection TsLint
@Directive({
    selector: '[mozDynamicHost]'
})
export class DynamicHostDirective {

    constructor(public viewContainerRef: ViewContainerRef) {
    }

}
