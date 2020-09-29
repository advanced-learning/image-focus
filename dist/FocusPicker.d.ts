import { Focus, FocusPickerOptions } from './interfaces';
export declare class FocusPicker {
    container: HTMLElement;
    img: HTMLImageElement;
    retina: HTMLImageElement;
    focus: Focus;
    private isDragging;
    private options;
    constructor(imageNode: HTMLImageElement, options?: FocusPickerOptions);
    startListening(): void;
    stopListening(): void;
    setFocus(focus: Focus): void;
    private startDragging;
    private handleMove;
    private stopDragging;
    private calculateOffsetFromFocus;
    private updateRetinaPositionFromFocus;
    private updateRetinaPosition;
    private updateCoordinates;
}
