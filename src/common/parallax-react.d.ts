import 'react';

// Augment react with the parallax properties
declare module 'react' {

  interface HTMLAttributes<T> {
    /**
     * The movement applied to each layer will be multiplied by its depth attribute.
     */
    'data-depth'?: string;

    /**
     * Makes mouse input relative to the position of the scene element.
     * No effect when gyroscope is used.
     */
    'data-relative-input'?: string;

    /**
     * Clips mouse input to the bounds of the scene. This means the movement stops as soon as the edge of the scene element is reached by the cursor.
     * No effect when gyroscope is used, or `hoverOnly` is active.
     */
    'data-clip-relative-input'?: boolean;

    /**
     * Parallax will only be in effect while the cursor is over the scene element, otherwise all layers move back to their initial position. Works best in combination with `relativeInput`.
     * No effect when gyroscope is used.
     */
    'data-hover-only'?: boolean;

    /**
     * Allows usage of a different element for cursor input.
     * The configuration property expects an HTMLElement, the data value attribute a query selector string.
     * Will only work in combination with `relativeInput`, setting `hoverOnly` might make sense too.
     * No effect when gyroscope is used.
     */
    'data-input-element'?: HTMLElement;

    /**
     * Caches the initial X/Y axis value on initialization and calculates motion relative to this.
     * No effect when cursor is used.
     */
    'data-calibrate-x'?: boolean;

    /**
     * Caches the initial X/Y axis value on initialization and calculates motion relative to this.
     * No effect when cursor is used.
     *
     * @default true
     */
    'dataC-calibrate-y'?: boolean;

    /**
     * Inverts the movement of the layers relative to the input.
     * Setting both of these values to false will cause the layers to move with the device motion or cursor.
     */
    'data-invert-x'?: boolean;

    /**
     * Inverts the movement of the layers relative to the input.
     * Setting both of these values to false will cause the layers to move with the device motion or cursor.
     */
    'data-invert-y'?: boolean;

    /**
     * Limits the movement of layers on the respective axis. Leaving this value at false gives complete freedom to the movement.
     */
    'data-limit-x'?: number | false;

    /**
     * Limits the movement of layers on the respective axis. Leaving this value at false gives complete freedom to the movement.
     */
    'data-limit-y'?: number | false;

    /**
     * Multiplies the input motion by this value, increasing or decreasing the movement speed and range.
     */
    'data-scalar-x'?: number;

    /**
     * Multiplies the input motion by this value, increasing or decreasing the movement speed and range.
     */
    'data-scalar-y'?: number;

    /**
     * Amount of friction applied to the layers. At 1 the layers will instantly go to their new positions, everything below 1 adds some easing.
     * The default value of 0.1 adds some sensible easing. Try 0.15 or 0.075 for some difference.
     */
    'data-friction-x'?: number;

    /**
     * Amount of friction applied to the layers. At 1 the layers will instantly go to their new positions, everything below 1 adds some easing.
     * The default value of 0.1 adds some sensible easing. Try 0.15 or 0.075 for some difference.
     */
    'data-friction-y'?: number;

    /**
     * X and Y origin of the mouse input. The default of 0.5 refers to the center of the screen or element, 0 is the left (X axis) or top (Y axis) border, 1 the right or bottom.
     * No effect when gyroscope is used.
     */
    'data-origin-x'?: number;

    /**
     * X and Y origin of the mouse input. The default of 0.5 refers to the center of the screen or element, 0 is the left (X axis) or top (Y axis) border, 1 the right or bottom.
     * No effect when gyroscope is used.
     */
    'data-origin-yt'?: number;

    /**
     * Decimals the element positions will be rounded to.
     * 1 is a sensible default which you should not need to change in the next few years, unless you have a very interesting and unique setup.
     */
    'data-precision'?: number;

    /**
     * String that will be fed to querySelectorAll on the scene element to select the layer elements. When null, will simply select all direct child elements.
     * Use .layer for legacy behaviour, selecting only child elements having the class name layer.
     */
    'data-selector'?: string | null;

    /**
     * Set to true to enable interactions with the scene and layer elements. When set to the default of false, the CSS attribute `pointer-events: none` will be applied for performance reasons.
     * Setting this to true alone will not be enough to fully interact with all layers, since they will be overlapping.
     * You have to either set `position: absolute` on all layer child elements, or keep pointerEvents at false and set `pointer-events: all` for the interactable elements only.
     */
    'data-pointer-events'?: boolean;
  }
}
