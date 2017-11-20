import {TweenLite, Elastic, Ease, Back, Bounce, Circ, Cubic, Expo, Linear, Quart, Quint, Sine, SlowMo} from 'gsap';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

export const MOZ_GSAP_ANIMATIONS = {
    ElasticOut: Elastic.easeOut,
    ElasticIn: Elastic.easeIn,
    ElasticInOut: Elastic.easeInOut,
    BackIn: Back.easeIn,
    BackInOut: Back.easeInOut,
    BackOut: Back.easeInOut,
    BounceIn: Bounce.easeIn,
    BounceInOut: Bounce.easeInOut,
    BounceOut: Bounce.easeInOut,
    CircIn: Circ.easeIn,
    CircInOut: Circ.easeInOut,
    CircOut: Circ.easeInOut,
    CubicIn: Cubic.easeIn,
    CubicInOut: Cubic.easeInOut,
    CubicOut: Cubic.easeInOut,
    ExpoIn: Expo.easeIn,
    ExpoInOut: Expo.easeInOut,
    ExpoOut: Expo.easeInOut,
    LinearIn: Linear.easeIn,
    LinearInOut: Linear.easeInOut,
    LinearOut: Linear.easeOut,
    QuadIn: Quart.easeIn,
    QuadOut: Quart.easeOut,
    QuadInOut: Quart.easeInOut,
    QuintIn: Quint.easeIn,
    QuintInOut: Quint.easeInOut,
    QuintOut: Quint.easeOut,
    QuartIn: Quart.easeIn,
    QuartOut: Quart.easeOut,
    QuartInOut: Quart.easeInOut,
    SineIn: Sine.easeIn,
    SineInOut: Sine.easeInOut,
    SineOut: Sine.easeOut,
    SlowMo: SlowMo.ease


};

export class MozAnimationConfig {
    animation: Ease = Elastic.easeOut;
    speed = 1;
}

export class MozLayoutAnimations {

    public static getAnimations() {
        return Object.keys(MOZ_GSAP_ANIMATIONS);
    }

    public static getAnimationByKey(animationKey: string) {
        if (MOZ_GSAP_ANIMATIONS.hasOwnProperty(animationKey)) {
            return MOZ_GSAP_ANIMATIONS[animationKey];
        }
    }

    constructor(public currentValue: number, public endValue: number) {
    }

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
