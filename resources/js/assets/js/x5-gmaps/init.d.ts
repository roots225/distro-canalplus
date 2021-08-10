export declare type apiOptionsType = {
    key: string;
    libraries?: string[];
    v?: string;
    language?: string;
    region?: string;
};
declare const init: (options: apiOptionsType) => void;
export default init;
