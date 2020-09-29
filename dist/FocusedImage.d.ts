import { Focus, FocusedImageOptions } from './interfaces';
export declare class FocusedImage {
    private imageNode;
    focus: Focus;
    options: FocusedImageOptions;
    container: HTMLElement;
    img: HTMLImageElement;
    resizeListenerObject: HTMLObjectElement;
    listening: boolean;
    debounceApplyShift: () => void;
    constructor(imageNode: HTMLImageElement, options?: FocusedImageOptions);
    setFocus: (focus: Focus) => void;
    applyShift: () => boolean;
    startListening(): void;
    stopListening(): void;
    private calcShift;
}
