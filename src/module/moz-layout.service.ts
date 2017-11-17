import {Injectable} from '@angular/core';
import {MozLayoutAnimations} from './class/moz-animations';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {
    MozLayoutAreaState, MozLayoutAreaStates, MozModuleInitialConfig,
    MozPartialLayoutConfig
} from './moz-layout.module';
import {MozLayoutConfigFactory} from './class/moz-layout-config-factory';


export interface MozLayoutSizeObject {
    TH: number;
    MH: number;
    BH: number;
    LS: number;
    LC: number;
    RC: number;
    RS: number;
    TF: number;
    MF: number;
    BF: number;
}


export interface MozCurrentLayoutState {
    TH: BehaviorSubject<string>;
    MH: BehaviorSubject<string>;
    BH: BehaviorSubject<string>;
    LS: BehaviorSubject<string>;
    LC: BehaviorSubject<string>;
    RC: BehaviorSubject<string>;
    RS: BehaviorSubject<string>;
    TF: BehaviorSubject<string>;
    MF: BehaviorSubject<string>;
    BF: BehaviorSubject<string>;
}


@Injectable()
export class MozLayoutService {

    private size: MozLayoutSizeObject;

    private layoutStates: MozLayoutAreaStates;

    private curentLayoutState: MozCurrentLayoutState;

    constructor() {

        const config = this.getLayoutConfigFromLocalStorage();

        console.log(config);
        this.getInitialSizes(config);

        this.layoutStates = config.availableStates;

        this.curentLayoutState = {
            TH: new BehaviorSubject(this.getLayoutState('TH')),
            MH: new BehaviorSubject(this.getLayoutState('MH')),
            BH: new BehaviorSubject(this.getLayoutState('BH')),
            LS: new BehaviorSubject(this.getLayoutState('LS')),
            LC: new BehaviorSubject(this.getLayoutState('LC')),
            RC: new BehaviorSubject(this.getLayoutState('RC')),
            RS: new BehaviorSubject(this.getLayoutState('RS')),
            TF: new BehaviorSubject(this.getLayoutState('TF')),
            MF: new BehaviorSubject(this.getLayoutState('MF')),
            BF: new BehaviorSubject(this.getLayoutState('BF')),
        }

    }

    public rewriteDefaulAreaStates(area: string, states: MozLayoutAreaState[]) {
        this.isSizeString(area);
        this.layoutStates[area] = states;
    }

    public setAreaState(area: string, state: string) {
        this.isSizeString(area);
        if (this.stateExist(area, state)) {
            this.setLayoutAreaSize(area, this.layoutStates[area][state].value);
        } else {
            throw new Error('State do not exist');
        }
    }

    public toggleBetween(area: string, state1: string, state2: string) {
        this.isSizeString(area);

        if (this.stateExist(area, state1) && this.stateExist(area, state2)) {
            this.getAreaState(area).subscribe((state) => {
                console.log(state);
                if (state === state1) {
                    this.setLayoutAreaSize(area, this.getState(area, state2).value);
                }

                if (state === state2) {
                    this.setLayoutAreaSize(area, this.getState(area, state1).value);
                }

            }).unsubscribe();
        } else {
            throw new Error('State do not exist');
        }
    }

    public getAreaState(area: string): BehaviorSubject<string> {
        return this.curentLayoutState[area];
    }

    public getAreaStates(): MozCurrentLayoutState {
        return this.curentLayoutState;
    }

    public setLayoutConfig(config: MozPartialLayoutConfig, save: boolean) {
        const configMerger = new MozLayoutConfigFactory(config);
        const normalizedConfig = configMerger.getMergedConfig();
        this.getInitialSizes(normalizedConfig);
        this.trigerLayoutStateChange();
        if (save) {
            localStorage.setItem('MOZ_LAYOUT_CONFIG', JSON.stringify(normalizedConfig));
        }
    }

    public setLayoutAreaSize(area: string, value: number) {
        this.isSizeString(area);
        const animation = new MozLayoutAnimations(this.size[area], value);
        animation.animate().subscribe((newValue: number) => {
            this.size[area] = newValue;
            this.curentLayoutState[area].next(this.getLayoutStateBasedOnValue(area, newValue));

        }, () => {
        }, () => {
        });
    }

    toggleLayoutArea() {

    }

    public getGridStyle() {
        const style = {};

        style['display'] = 'grid';

        style['grid-template-areas'] = this.generateGridTemplate();

        style['grid-template-rows'] = [
            this.size.TH + 'px',
            this.size.MH + 'px',
            this.size.BH + 'px',
            'auto',
            this.size.TF + 'px',
            this.size.MF + 'px',
            this.size.BF + 'px',
        ].join(' ');

        style['grid-template-columns'] = [
            this.size.LS + 'px',
            this.size.LC + 'px',
            'auto',
            this.size.RC + 'px',
            this.size.RS + 'px',
        ].join(' ');

        return style;
    }

    private getInitialSizes(config: MozModuleInitialConfig) {
        this.size = {
            TH: this.findStateOfLayoutFromProvidedConfig(config, 'TH').value,
            MH: this.findStateOfLayoutFromProvidedConfig(config, 'MH').value,
            BH: this.findStateOfLayoutFromProvidedConfig(config, 'BH').value,
            LS: this.findStateOfLayoutFromProvidedConfig(config, 'LS').value,
            LC: this.findStateOfLayoutFromProvidedConfig(config, 'LC').value,
            RC: this.findStateOfLayoutFromProvidedConfig(config, 'RC').value,
            RS: this.findStateOfLayoutFromProvidedConfig(config, 'RS').value,
            TF: this.findStateOfLayoutFromProvidedConfig(config, 'TF').value,
            MF: this.findStateOfLayoutFromProvidedConfig(config, 'MF').value,
            BF: this.findStateOfLayoutFromProvidedConfig(config, 'BF').value
        };
    }

    private findStateOfLayoutFromProvidedConfig(config: MozModuleInitialConfig, area: string) {
        const initialState: string = config.initialStates[area];

        return this.findStateInStateArray(config.availableStates[area], initialState);
    }

    private findStateInStateArray(states: MozLayoutAreaState[], state: string): MozLayoutAreaState {
        const findedState = states.find((availableState: MozLayoutAreaState) => {
            return availableState.state === state;
        });

        if (!findedState) {
            throw new Error('State was not find');
        }
        return findedState;
    }

    private generateGridTemplate(): string {
        const gridTemplate = [
            'TH TH TH TH TH',
            'MH MH MH MH MH',
            'BH BH BH BH BH',
            'LS LC MC RC RS',
            'TF TF TF TF TF',
            'MF MF MF MF MF',
            'BF BF BF BF BF'
        ];

        return gridTemplate.reduce((current: string, row: string) => {
            current += '"' + row + '"';
            return current;
        }, '');
    }

    private isSizeString(area: string) {
        if (!this.size.hasOwnProperty(area)) {
            throw new Error('Incorrect value check documentation: https://www.google.com/');
        }
        return true;
    }

    private getLayoutStateBasedOnValue(area: string, value: number): string {
        const stateExist = this.layoutStates[area].find((stateItem: MozLayoutAreaState) => {
            return stateItem.value === value;
        });

        if (stateExist) {
            return stateExist.state;
        }

        return 'transition';

    }

    private getLayoutState(area: string) {
        this.isSizeString(area);

        const layoutState: MozLayoutAreaState = this.layoutStates[area].find((state: MozLayoutAreaState) => {
            return state.value === this.size[area];
        });

        if (layoutState) {
            return layoutState.state;
        } else {
            return '';
        }
    }

    private getState(area: string, state: string): MozLayoutAreaState {
        if (this.stateExist(area, state)) {
            return this.layoutStates[area].find((stateItem: MozLayoutAreaState) => {
                return stateItem.state === state;
            });
        } else {
            throw new Error('Provided state do not exist');
        }
    }

    private stateExist(area: string, state: string): boolean {
        this.isSizeString(area);
        const stateExist = this.layoutStates[area].find((stateItem: MozLayoutAreaState) => {
            return stateItem.state === state;
        });

        return !!stateExist;
    }

    private isValidConfig(config: any) {
        if (config) {
            if (config.hasOwnProperty('initialStates') && config.hasOwnProperty('initialStates')) {
                // Assume that this is valid object;
                return true;
            }
        }

        return false;
    }


    private getLayoutConfigFromLocalStorage(): MozModuleInitialConfig {

        const config = JSON.parse(localStorage.getItem('MOZ_LAYOUT_CONFIG'));

        const configMerger = new MozLayoutConfigFactory(config);

        return configMerger.getMergedConfig();
    }

    private trigerLayoutStateChange() {
        for (const areaKey in this.curentLayoutState) {
            if (this.curentLayoutState.hasOwnProperty(areaKey)) {
                this.curentLayoutState[areaKey].next(this.getLayoutState(areaKey));
            }
        }
    }
}
