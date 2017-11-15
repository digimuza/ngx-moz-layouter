import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicHostDirective} from './dynamic-host.directive';
import {RenderComponent} from './dynamic-component/dynamic-component.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DynamicHostDirective, RenderComponent],
    exports: [RenderComponent]
})
export class MozDynamicComponentModule {
}
