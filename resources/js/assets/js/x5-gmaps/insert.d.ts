declare global {
    interface Window {
        _gmapsInit: () => void;
    }
}
declare const insert: (params: string) => Promise<void>;
export default insert;
