import {Injectable} from '@angular/core';
import {MozLayoutAnimations} from './class/moz-animations';

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

@Injectable()
export class MozLayoutService {

    private size: MozLayoutSizeObject;

    constructor() {
        this.size = {
            TH: 50,
            MH: 0,
            BH: 0,
            LS: 250,
            LC: 0,
            RC: 0,
            RS: 200,
            TF: 0,
            MF: 0,
            BF: 0
        };
    }

    public hardSizeSet(size: MozLayoutSizeObject) {
        this.size = size;
    }

    public setLayoutAreaSize(area: string, value: number) {
        if (!this.size.hasOwnProperty(area)) {
            throw new Error('Incorrect value check documentation: https://www.google.com/');
        }

        const animation = new MozLayoutAnimations(this.size[area], value);
        animation.animate().subscribe((newValue: number) => {
            this.size[area] = newValue;
        });
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
}
