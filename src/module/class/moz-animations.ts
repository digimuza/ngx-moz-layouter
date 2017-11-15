import {TweenLite, Elastic, Ease} from 'gsap';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
export class MozAnimationConfig {
    animation: Ease = Elastic.easeOut;
    speed = 1;
}

export class MozLayoutAnimations {

    constructor(public currentValue: number, public endValue: number) {}

    animate(config: MozAnimationConfig = new MozAnimationConfig()) {
        return new Observable((observer: Subscriber<number>) => {
            const v = {
                value: this.currentValue
            };
            TweenLite.to(v, config.speed, {
                value: this.endValue,
                ease: config.animation,
                onUpdate: () => {
                    observer.next(v.value);
                },
                onComplete: () => {
                    observer.complete();
                }
            });
        });
    }
}
