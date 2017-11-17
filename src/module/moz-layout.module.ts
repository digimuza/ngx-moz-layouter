import {NgModule, ModuleWithProviders, InjectionToken} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MozLayoutService} from './moz-layout.service';
import {MozLayoutComponent} from './moz-layout.component';
import {TopHeaderComponent} from './components/top-header/top-header.component';
import {MidHeaderComponent} from './components/mid-header/mid-header.component';
import {BotHeaderComponent} from './components/bot-header/bot-header.component';
import {LeftSidebarComponent} from './components/left-sidebar/left-sidebar.component';
import {RightSidebarComponent} from './components/right-sidebar/right-sidebar.component';
import {LeftContentComponent} from './components/left-content/left-content.component';
import {RightContentComponent} from './components/right-content/right-content.component';
import {MidContentComponent} from './components/mid-content/mid-content.component';
import {TopFooterComponent} from './components/top-footer/top-footer.component';
import {MidFooterComponent} from './components/mid-footer/mid-footer.component';
import {BotFooterComponent} from './components/bot-footer/bot-footer.component';
import {MozDynamicComponentModule} from './dynamic-component/moz-dynamic-component.module';
import {NoComponentComponent} from './components/no-component/no-component.component';
import {BaseBlockComponent} from './components/base-block/base-block.component';

export * from './moz-layout.component';
export * from './moz-layout.service';

export interface MozLayoutAreaState {
    state: string;
    value: number;
}

export interface LayoutInitialStates {
    TH: string;
    MH: string;
    BH: string;
    LS: string;
    LC: string;
    RC: string;
    RS: string;
    TF: string;
    MF: string;
    BF: string;
}

export interface MozLayoutAreaStates {
    TH: MozLayoutAreaState[];
    MH: MozLayoutAreaState[];
    BH: MozLayoutAreaState[];
    LS: MozLayoutAreaState[];
    LC: MozLayoutAreaState[];
    RC: MozLayoutAreaState[];
    RS: MozLayoutAreaState[];
    TF: MozLayoutAreaState[];
    MF: MozLayoutAreaState[];
    BF: MozLayoutAreaState[];
}

export interface MozModuleInitialConfig {
    initialStates: LayoutInitialStates;
    availableStates: MozLayoutAreaStates;
}
const MOZ_LAYOUT_CONFIG = new InjectionToken('MOZ_LAYOUT_CONFIG');

@NgModule({
    imports: [
        CommonModule,
        MozDynamicComponentModule
    ],
    declarations: [
        BaseBlockComponent,
        NoComponentComponent,
        TopHeaderComponent,
        MidHeaderComponent,
        BotHeaderComponent,
        LeftSidebarComponent,
        RightSidebarComponent,
        LeftContentComponent,
        RightContentComponent,
        MidContentComponent,
        TopFooterComponent,
        MidFooterComponent,
        BotFooterComponent,
        MozLayoutComponent
    ],
    exports: [
        MozLayoutComponent,
        NoComponentComponent
    ],
    providers: [
        MozLayoutService
    ],
    entryComponents: [
        NoComponentComponent
    ]
})
export class MozLayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MozLayoutModule,
            providers: [
                MozLayoutService
            ]
        };
    }
}
