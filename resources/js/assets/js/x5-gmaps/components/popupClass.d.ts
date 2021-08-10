/// <reference types="googlemaps" />
export interface PopupType extends google.maps.OverlayView {
    position: google.maps.LatLngLiteral;
    content: HTMLElement;
    setPosition: (position: google.maps.LatLngLiteral) => void;
}
export declare class PopupClass extends google.maps.OverlayView {
    position: google.maps.LatLngLiteral;
    content: HTMLElement;
    constructor(position: google.maps.LatLngLiteral, content: HTMLElement);
    onAdd: () => HTMLElement;
    onRemove: () => HTMLElement | null;
    draw: () => void;
    setPosition: (position: google.maps.LatLngLiteral) => void;
}
