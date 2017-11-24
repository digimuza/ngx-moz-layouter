import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MozCurrentLayoutState, MozLayoutSizeObject} from '../moz-layout.service';
import {
    LayoutInitialStates, MozLayoutAreaState, MozLayoutAreaStates,
    MozModuleInitialConfig
} from '../moz-layout.module';
import {MozLayoutConfigFactory} from '../class/moz-layout-config-factory';
import {
    MozAnimationConfig,
    MozAnimationConfigInterface, MozAnimationsConfigurationInterface,
    MozLayoutAnimations
} from '../class/moz-animations';

export const MozLocalStorageKey = 'MOZ_LAYOUT_CONFIG';


export class MozServiceDataLoad {

    protected currentLayoutSize: MozLayoutSizeObject;
    protected availableLayoutStates: MozLayoutAreaStates;
    protected currentLayoutStateBehaviorSubjects: MozCurrentLayoutState;
    protected config: MozModuleInitialConfig;
    protected animationConfig: MozAnimationsConfigurationInterface;

    constructor() {
        this.config = this.getLayoutConfigFromLocalStorage();
        this.init();
    }

    public saveCurrentLayoutConfig() {
        localStorage.setItem(MozLocalStorageKey, JSON.stringify(this.getCurrentConfig()));
    }

    public setAreaAnimation(areaKey: string, animation: MozAnimationConfigInterface) {
        this.isValidArea(areaKey);
        MozLayoutAnimations.getAnimationByKey(animation.animation);
        this.animationConfig[areaKey] = animation;
    }

    public getAnimationData(areaKey: string): MozAnimationConfigInterface {
        this.isValidArea(areaKey);
        return this.animationConfig[areaKey];
    }

    public getAvailableAnimations(): string[] {
        const animation = new MozAnimationConfig();
        return animation.getAnimations();
    }

    public addNewLayoutState(areaKey: string, state: MozLayoutAreaState) {
        this.isValidArea(areaKey);
        let stateValueDoNotExist = false;
        let stateNameDoNotExist = false;
        // IF state with value or name is not in available states we can add state

        try {
            this.getAreaStateByName(areaKey, state.state);
        } catch (error) {
            stateNameDoNotExist = true;
        }

        const findStateWithValue = this.getAreaStateNameByValue(areaKey, state.value, 'undefined_state');
        if (findStateWithValue === 'undefined_state') {
            stateValueDoNotExist = true;
        }

        if (stateValueDoNotExist && stateNameDoNotExist) {
            this.availableLayoutStates[areaKey].push(state);
        } else {
            const msg = 'State with value or name exist';
            const errorMsg = `${msg} stateValueDoNotExist:${stateValueDoNotExist} stateNameDoNotExist:${stateNameDoNotExist}`;
            throw new Error(errorMsg);
        }

    }

    public getAreaKeysArray(): string[] {
        return Object.keys(this.availableLayoutStates);
    }

    public getAreaStateNameByValue(areaKey: string, value: number, undefinedState: string = 'transition'): string {
        this.isValidArea(areaKey);
        const findState = this.availableLayoutStates[areaKey].find((availableStates: MozLayoutAreaState) => {
            return availableStates.value === value;
        });
        if (!findState) {
            return undefinedState;
        }
        return findState.state;
    }


    public getAreaStateByName(areaKey: string, state: string): MozLayoutAreaState {
        this.isValidArea(areaKey);
        const findState = this.availableLayoutStates[areaKey].find((availableStates: MozLayoutAreaState) => {
            return availableStates.state === state;
        });

        if (!findState) {
            throw new Error('Area state with value [' + state + '] do not exist');
        }

        return findState;
    }

    public getAreaStates(areaKey: string) {
        this.isValidArea(areaKey);
        return this.availableLayoutStates[areaKey];
    }

    public getAreaSize(areaKey: string) {
        this.isValidArea(areaKey);
        return this.currentLayoutSize[areaKey];
    }

    public getCurrentAreaStateName(areaKey: string) {
        this.isValidArea(areaKey);
        const areaSize: number = this.getAreaSize(areaKey);
        return this.getAreaStateNameByValue(areaKey, areaSize);

    }

    public isValidArea(areaKey: string) {
        if (this.availableLayoutStates.hasOwnProperty(areaKey)) {
            return true;
        } else {
            throw new Error('areaKey [' + areaKey + '] is invalid');
        }
    }

    public getLayoutConfigFromLocalStorage(): MozModuleInitialConfig {
        const config = JSON.parse(localStorage.getItem(MozLocalStorageKey));
        const configMerger = new MozLayoutConfigFactory(config);
        return configMerger.getMergedConfig();
    }

    public getAreaBehaviorSubject(areaKey: string) {
        this.isValidArea(areaKey);
        return this.currentLayoutStateBehaviorSubjects[areaKey];
    }

    private initialSizesFromConfig(): void {

        // Creating initial sizes from config.
        const areaKeys = Object.keys(this.availableLayoutStates);
        const currentLayoutSizes: MozLayoutSizeObject = {
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
        areaKeys.forEach((areaKey: string) => {
            try {
                currentLayoutSizes[areaKey] = this.getAreaStateByName(areaKey, this.config.initialStates[areaKey]).value;
            } catch (error) {
                currentLayoutSizes[areaKey] = 0;
            }
        });

        this.currentLayoutSize = currentLayoutSizes;
    }


    private init() {
        this.availableLayoutStates = this.config.availableStates;
        this.animationConfig = this.config.layoutAreaAnimations;
        this.initialSizesFromConfig();
        this.currentLayoutStateBehaviorSubjects = {
            TH: new BehaviorSubject(this.getCurrentAreaStateName('TH')),
            MH: new BehaviorSubject(this.getCurrentAreaStateName('MH')),
            BH: new BehaviorSubject(this.getCurrentAreaStateName('BH')),
            LS: new BehaviorSubject(this.getCurrentAreaStateName('LS')),
            LC: new BehaviorSubject(this.getCurrentAreaStateName('LC')),
            RC: new BehaviorSubject(this.getCurrentAreaStateName('RC')),
            RS: new BehaviorSubject(this.getCurrentAreaStateName('RS')),
            TF: new BehaviorSubject(this.getCurrentAreaStateName('TF')),
            MF: new BehaviorSubject(this.getCurrentAreaStateName('MF')),
            BF: new BehaviorSubject(this.getCurrentAreaStateName('BF'))
        }
    }


    private getCurrentConfig(): MozModuleInitialConfig {
        const initialStates: LayoutInitialStates = {
            TH: '',
            MH: '',
            BH: '',
            LS: '',
            LC: '',
            RC: '',
            RS: '',
            TF: '',
            MF: '',
            BF: ''
        };

        this.getAreaKeysArray().forEach((areaKey: string) => {
            initialStates[areaKey] = this.getCurrentAreaStateName(areaKey);
        });

        const availableStates: MozLayoutAreaStates = this.availableLayoutStates;
        const layoutAreaAnimations: MozAnimationsConfigurationInterface = this.animationConfig;

        return {
            initialStates: initialStates,
            availableStates: availableStates,
            layoutAreaAnimations: layoutAreaAnimations
        }

    }

}
