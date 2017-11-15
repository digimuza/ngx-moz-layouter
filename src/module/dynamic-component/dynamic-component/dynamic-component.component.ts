import {
    Component, ComponentFactoryResolver, Input, OnInit, Type,
    ViewChild
} from '@angular/core';
import {DynamicHostDirective} from '../dynamic-host.directive';
import {DynamicComponent} from '../../moz-layout.component';

@Component({
    selector: 'ngx-moz-render',
    templateUrl: './dynamic-component.component.html',
})
export class RenderComponent implements OnInit {

    @Input() component: DynamicComponent;
    @ViewChild(DynamicHostDirective) adHost: DynamicHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.loadComponent();
    }

    loadComponent() {

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component.component);
        const viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance).data = this.component.data;
    }

}
