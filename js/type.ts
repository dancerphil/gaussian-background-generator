export interface Layer {
    orbs?: number;
    radius?: number;
    maxVelocity?: number;
    color: string;
    columns?: number;
    rows?: number;
}

export type BlurMethod = 'stackblur'| 'fastblur' | 'integralblur' | 'stackboxblur';

export interface Options {
    blur?: boolean;
    blurRadius?: number;
    blurMethod?: BlurMethod;
    blurIterations?: number;
    animation?: boolean;
    fpsCap?: number;
    renderWidth?: number;
    renderHeight?: number;
}

export type GaussianBackground = (element: HTMLCanvasElement, layers: Layer, options: Options) => {
    generateLayer(orbs: number, radius: number, maxVelocity: number, color: string, columns?: number, rows?: number): Layer
    displayLoop(): void
    drawBackground(): void
    drawBlur(): void
    refreshLayers(): void
    updateLayers(layers: Layer): void
    updateOptions(options: Options): void
    pause(): void
    play(): void
}
