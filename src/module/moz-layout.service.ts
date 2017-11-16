import {Injectable} from '@angular/core';
import {MozLayoutAnimations} from './class/moz-animations';
import {MozLayoutStates} from './defaults.constant';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

export interface MozLayoutAreaState {
    state: string;
    value: number;
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


@Injectable()
export class MozLayoutService {

    private size: MozLayoutSizeObject;

    private layoutStates: MozLayoutAreaStates;

    private curentlayoutState: MozCurrentLayoutState;

    constructor() {
        this.size = {
            TH: 0,
            MH: 0,
            BH: 0,
            LS: 0,
            LC: 0,
            RC: 0,
            RS: 0,
            TF: 0,
            MF: 0,
            BF: 0
        };

        this.layoutStates = MozLayoutStates;

        this.curentlayoutState = {
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

        console.log('State Exist', this.stateExist(area, state1) && this.stateExist(area, state2));
        console.log('AREA', area, this.layoutStates[area]);


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
        return this.curentlayoutState[area];
    }

    public getAreaStates(): MozCurrentLayoutState {
        return this.curentlayoutState;
    }

    public hardSizeSet(size: MozLayoutSizeObject) {
        this.size = size;
    }

    public setLayoutAreaSize(area: string, value: number) {
        this.isSizeString(area);
        const animation = new MozLayoutAnimations(this.size[area], value);
        animation.animate().subscribe((newValue: number) => {
            this.size[area] = newValue;
        }, () => {
        }, () => {
            this.curentlayoutState[area].next(this.getLayoutState(area));
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
}
