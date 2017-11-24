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

export interface MozAnimationConfigInterface {
    speed: number;
    animation: string;
}

export interface MozAnimationsConfigurationInterface {
    TH: MozAnimationConfigInterface;
    MH: MozAnimationConfigInterface;
    BH: MozAnimationConfigInterface;
    LS: MozAnimationConfigInterface;
    LC: MozAnimationConfigInterface;
    RC: MozAnimationConfigInterface;
    RS: MozAnimationConfigInterface;
    TF: MozAnimationConfigInterface;
    MF: MozAnimationConfigInterface;
    BF: MozAnimationConfigInterface;
}

export class MozAnimationConfig implements MozAnimationConfigInterface {


    get animation(): string {
        return this._animation;
    }

    set animation(value: string) {
        if (MOZ_GSAP_ANIMATIONS.hasOwnProperty(value)) {
            this._animation = value;
        } else {
            throw new Error('Provided animation do not exist');
        }
    }

    private _animation: string;
    speed = 1;


    constructor(animation: string = 'ElasticOut', speed: number = 1) {
        this.animation = animation;
        this.speed = speed;
    }

    public getAnimations() {
        return Object.keys(MOZ_GSAP_ANIMATIONS);
    }

}

export class MozLayoutAnimations {

    public static getAnimationByKey(animationKey: string) {
        if (MOZ_GSAP_ANIMATIONS.hasOwnProperty(animationKey)) {
            return MOZ_GSAP_ANIMATIONS[animationKey];
        }else {
            throw new Error('Provided animation do not exist');
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
                ease: MozLayoutAnimations.getAnimationByKey(config.animation),
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
