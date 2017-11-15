import {NgModule, ModuleWithProviders} from '@angular/core';
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

export * from './moz-layout.component';
export * from './moz-layout.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
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
        MozLayoutComponent
    ],
    providers: [
        MozLayoutService
    ]
})
export class MozLayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MozLayoutModule,
            providers: [MozLayoutService]
        };
    }
}
