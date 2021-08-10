import { App } from 'vue';
import { apiOptionsType } from './init';
import { getMaps } from './api';
declare const install: (_app: App, options: apiOptionsType) => void;
export declare const gmapsMap: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export declare const gmapsCircle: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export declare const gmapsMarker: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export declare const gmapsPolygon: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export declare const gmapsPolyline: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export declare const gmapsPopup: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export declare const gmapsRectangle: import("vue").DefineComponent<Record<string, unknown>, Record<string, unknown>, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    [x: string]: unknown;
}>, {}>;
export { getMaps };
export default install;
