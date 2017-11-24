import {Component, OnInit} from '@angular/core';
import {MozLayoutService} from 'ngx-moz-layouter';

@Component({
    selector: 'app-sample-rs',
    templateUrl: './sample-rs.component.html',
    styleUrls: ['./sample-rs.component.scss']
})
export class SampleRsComponent implements OnInit {


    constructor(public layout: MozLayoutService) {
    }

    ngOnInit() {
    }

    animationChanged(areaKey: string, animation: string, speed: number = 1) {
        this.layout.setAreaAnimation(areaKey, {
            speed: 1,
            animation: animation
        });
    }

    changeSpeed(areaKey: string, value: number) {
        let animation = this.layout.getAnimationData(areaKey);
        animation.speed = value;
        this.layout.setAreaAnimation(areaKey, animation);
    }
}
