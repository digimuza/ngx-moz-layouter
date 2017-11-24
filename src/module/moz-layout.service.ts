import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MozDomManipulator} from './service/moz-dom-manipulator';
import {MozPartialLayoutConfig} from './moz-layout.module';
import {MozLocalStorageKey} from './service/moz-service.data.load';


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
export class MozLayoutService extends MozDomManipulator {
    public static initialConfig(config: MozPartialLayoutConfig, single: boolean = true) {
        const conf = localStorage.getItem('MOZ_INITIAL_SAVE');

        if (single) {
            if (conf !== 'save') {
                localStorage.setItem(MozLocalStorageKey, JSON.stringify(config));
                localStorage.setItem('MOZ_INITIAL_SAVE', 'save');
            }
        } else {
            localStorage.setItem(MozLocalStorageKey, JSON.stringify(config));
        }

    }

    constructor() {
        super();
    }

    public toggleBetween(areaKey: string, state1: string, state2: string) {
        this.isValidArea(areaKey);

        try {
            const findState1 = this.getAreaStateByName(areaKey, state1);
            const findState2 = this.getAreaStateByName(areaKey, state2);

            // TODO improve this function. I don't like it but for now it works
            this.getAreaBehaviorSubject(areaKey).subscribe((state: string) => {
                if (state === findState1.state) {
                    this.setLayoutAreaSize(areaKey, findState2.value);
                }

                if (state === findState2.state) {
                    this.setLayoutAreaSize(areaKey, findState1.value);
                }

            }).unsubscribe();

        } catch (error) {
            console.error(error);
        }
    }

    public setAreaState(areaKey: string, state: string) {
        this.isValidArea(areaKey);

        try {
            const findState = this.getAreaStateByName(areaKey, state);
            this.setLayoutAreaSize(areaKey, findState.value);

        } catch (error) {
            console.error(error);
        }
    }


}
