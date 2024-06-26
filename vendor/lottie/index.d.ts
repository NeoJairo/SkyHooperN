declare abstract class Asset {
    abstract fromJSON(json: Record<string, any>): Asset;
    abstract toJSON(): Record<string, any>;
    parent: any;
    constructor(parent: any);
}

declare class ImageAsset extends Asset {
    data?: string;
    id?: string;
    height: number;
    path?: string;
    width: number;
    fromJSON(json: Record<string, any>): ImageAsset;
    toJSON(): Record<string, any>;
}

declare enum AssetType {
    PRECOMPOSITION = 0,
    IMAGE = 1
}

declare enum BlendMode {
    NORMAL = 0,
    MULTIPLY = 1,
    SCREEN = 2,
    OVERLAY = 3,
    DARKEN = 4,
    LIGHTEN = 5,
    COLOR_DODGE = 6,
    COLOR_BURN = 7,
    HARD_LIGHT = 8,
    SOFT_LIGHT = 9,
    DIFFERENCE = 10,
    EXCLUSION = 11,
    HUE = 12,
    SATURATION = 13,
    COLOR = 14,
    LUMINOSITY = 15
}

declare enum FillRuleType {
    EVEN_ODD = 1,
    NONZERO = 2
}

declare enum GradientFillType {
    NONE = 0,
    LINEAR = 1,
    RADIAL = 2,
    ANGULAR = 4,
    REFLECTED = 5,
    DIAMOND = 6
}

declare enum GradientStrokeType {
    LINEAR = 1,
    RADIAL = 2
}

declare enum LayerType {
    PRECOMPOSITION = 0,
    SOLID = 1,
    IMAGE = 2,
    GROUP = 3,
    SHAPE = 4,
    TEXT = 5,
    AUDIO = 6,
    VIDEO_PLACEHOLDER = 7,
    IMAGE_SEQUENCE = 8,
    VIDEO = 9,
    IMAGE_PLACEHOLDER = 10,
    GUIDE = 11,
    ADJUSTMENT = 12,
    CAMERA = 13,
    LIGHT = 14
}

declare enum LineCapType {
    BUTT = 1,
    ROUND = 2,
    PROJECTING = 3
}

declare enum LineJoinType {
    MITER = 1,
    ROUND = 2,
    BEVEL = 3
}

declare enum MaskMode {
    None = "n",
    Add = "a",
    Subtract = "s",
    Intersect = "i",
    Lighten = "l",
    Darken = "d",
    Difference = "f"
}

declare enum PropertyType {
    AMOUNT = "am",
    ANCHOR = "a",
    ANGLE = "an",
    OPACITY = "o",
    POSITION = "p",
    POINTS = "pt",
    ROTATION = "r",
    ROTATION_X = "rx",
    ROTATION_Y = "ry",
    ROTATION_Z = "rz",
    SCALE = "s",
    SKEW_AXIS = "sa",
    SKEW = "sk",
    SHAPE = "sh",
    EXPANSION = "x",
    FEATHER = "f",
    SIZE = "sz",
    ROUNDNESS = "rd",
    MITER_LIMIT = "ml",
    STROKE_WIDTH = "sw",
    NUMBER = "nu",
    COLOR = "cl",
    ORIENTATION = "or",
    GRADIENT = "gr",
    EFFECT_VALUE = "v",
    TEXT_DATA = "d",
    TEXT_ALIGNMENT = "ta",
    MAX_EASE = "xe",
    MIN_EASE = "ne",
    MAX_AMOUNT = "ma",
    RANGE_UNITS = "rn",
    OFFSET = "of",
    EXPRESSION_SELECTOR = "sm",
    START = "st",
    END = "e",
    SATURATION = "fs",
    HUE = "fh",
    BRIGHTNESS = "fb",
    TEXT_TRACKING = "t",
    CENTER = "cn",
    RADIUS = "ra",
    DISTANCE = "ds"
}

declare enum ShapeType {
    ELLIPSE = "el",
    FILL = "fl",
    GRADIENT_FILL = "gf",
    GRADIENT_STROKE = "gs",
    GROUP = "gr",
    MERGE = "mm",
    OFFSET_PATH = "op",
    PATH = "sh",
    RECTANGLE = "rc",
    REPEATER = "rp",
    ROUNDED_CORNERS = "rd",
    STAR = "sr",
    STROKE = "st",
    TRIM = "tm",
    TWIST = "tw",
    PUCKER_BLOAT = "pb",
    ZIG_ZAG = "zz"
}

declare enum TrimMode {
    SIMULTANEOUSLY = 1,
    INDIVIDUALLY = 2
}

declare enum RepeaterComposite {
    ABOVE = 1,
    BELOW = 2
}

declare enum StarType {
    STAR = 1,
    POLYGON = 2
}

declare enum MatteMode {
    NORMAL = 0,
    ALPHA = 1,
    INVERTED_ALPHA = 2,
    LUMA = 3,
    INVERTED_LUMA = 4
}

declare enum EffectType {
    NONE = 0,
    CUSTOM = 5,
    PAINT_OVER_TRANSPARENT = 7,
    TINT = 20,
    FILL = 21,
    STROKE = 22,
    TRITONE = 23,
    PRO_LEVELS = 24,
    DROP_SHADOW = 25,
    RADIAL_WIPE = 26,
    DISPLACEMENT_MAP = 27,
    MATTE3 = 28,
    GAUSSIAN_BLUR = 29,
    MESH_WRAP = 31,
    WAVY = 32,
    SPHERIZE = 33,
    PUPPET = 34
}

declare enum EffectValueType {
    SLIDER = 0,
    ANGLE = 1,
    COLOR = 2,
    POINT = 3,
    CHECKBOX = 4,
    IGNORED = 6,
    DROPDOWN = 7,
    LAYER = 10
}

declare enum TextCaps {
    REGULAR = 0,
    ALL_CAPS = 1,
    SMALL_CAPS = 2
}

declare enum TextGrouping {
    CHARACTERS = 1,
    WORD = 2,
    LINE = 3,
    ALL = 4
}

declare enum TextJustify {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    JUSTIFY_LAST_LINE_LEFT = 3,
    JUSTIFY_LAST_LINE_RIGHT = 4,
    JUSTIFY_LAST_LINE_CENTER = 5,
    JUSTIFY_LAST_LINE_FULL = 6
}

declare enum TextBased {
    CHARACTERS = 1,
    CHARACTER_EXCLUDING_SPACES = 2,
    WORDS = 3,
    LINES = 4
}

declare enum TextShape {
    SQUARE = 1,
    RAMP_UP = 2,
    RAMP_DOWN = 3,
    TRIANGLE = 4,
    ROUND = 5,
    SMOOTH = 6
}

interface Value {
    toJSON(): any;
}

declare abstract class Color implements Value {
    protected abstract toRgbArray(): number[];
    protected abstract toRgbArrayWebsafe(): number[];
    abstract websafeColors(): void;
    toJSON(): number[];
    toJSONWebsafe(): number[];
    static fromJSON(json: number[]): Color;
}
declare class ColorRgb extends Color {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number);
    websafeColors(): void;
    protected toRgbArray(): number[];
    protected toRgbArrayWebsafe(): number[];
    static fromJSON(json: number[]): ColorRgb;
}
declare class ColorRgba extends ColorRgb {
    a: number;
    constructor(r: number, g: number, b: number, a?: number);
    websafeColors(): void;
    protected toRgbArray(): number[];
    protected toRgbArrayWebsafe(): number[];
    static fromJSON(json: number[]): ColorRgba;
}

declare class TextDocument implements Value {
    fontFamily: string;
    fontColor: Color;
    fontSize: number;
    text: string;
    lineHeight?: number;
    boxSize?: [number, number];
    justify?: TextJustify;
    textCaps?: TextCaps;
    textTracking?: number;
    strokeColor?: Color;
    strokeWidth?: number;
    static fromJSON(json: Record<string, any>): TextDocument;
    toJSON(): any;
}

declare class KeyFrame {
    frame: number;
    value: number | number[] | Value;
    frameInTangent?: [number, number];
    frameOutTangent?: [number, number];
    valueInTangent?: [number, number];
    valueOutTangent?: [number, number];
    hold: boolean;
    constructor(frame?: number, value?: number | number[] | Value);
    fromJSON(json: Record<string, any>, valueClass?: any): KeyFrame;
    toJSON(): Record<string, any>;
}

declare class Property {
    UID: number;
    readonly type: PropertyType;
    expression?: string;
    isAnimated: boolean;
    index?: number;
    maxColors?: number;
    values: Array<KeyFrame>;
    private _parent;
    getParent(): any;
    constructor(parent: any, type: PropertyType, values?: Array<KeyFrame>);
    fromJSON(json: Record<string, any>): Property;
    toJSON(): Record<string, any>;
}

declare class GradientStop {
    offset: number;
    color: number[];
    constructor(offset?: number, color?: number[]);
    get hasAlpha(): boolean;
    get red(): number;
    get green(): number;
    get blue(): number;
    get alpha(): number | undefined;
}
declare class GradientColorsProperty extends Property {
    colorCount: number;
    private keyframeValue;
    keyframeHasAlpha(index: number): boolean;
    keframeStops(index: number): GradientStop[];
    setKeyframeStops(index: number, stops: GradientStop[]): void;
    addKeyframe(frame: number, stops: GradientStop[]): KeyFrame;
    private stopsToArray;
}
declare class Gradient {
    gradientColors: GradientColorsProperty;
    get colorCount(): number;
    set colorCount(count: number);
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): Gradient;
}

declare class Transform {
    anchor: Property;
    opacity: Property;
    position: Property;
    rotation?: Property;
    scale: Property;
    skew?: Property;
    skewAxis?: Property;
    orientation?: Property;
    rotationX?: Property;
    rotationY?: Property;
    rotationZ?: Property;
    fromJSON(json: Record<string, any>): this;
    toJSON(): Record<string, any>;
}

declare class EffectValue {
    name: string;
    matchName?: string;
    index: number;
    value?: Property | number;
    type: EffectValueType;
    constructor(type: EffectValueType);
    fromJSON(json: Record<string, any>): EffectValue;
    toJSON(): Record<string, any>;
}

declare class Effect {
    name: string;
    matchName?: string;
    numberOfProperties?: number;
    index: number;
    enabled: boolean;
    type: EffectType;
    values: EffectValue[];
    constructor(type?: EffectType);
    fromJSON(json: Record<string, any>): Effect;
    toJSON(): Record<string, any>;
}

declare class Mask {
    isInverted: boolean;
    name: string;
    opacity: Property;
    points: Property;
    mode: MaskMode;
    expansion: Property;
    fromJSON(json: Record<string, any>): Mask;
    toJSON(): Record<string, any>;
}

declare abstract class Layer {
    abstract readonly type: LayerType;
    autoOrient: boolean;
    blendMode: BlendMode;
    classNames: string[];
    id: string;
    index?: number;
    inPoint: number;
    is3D: boolean;
    name: string;
    outPoint: number;
    startTime: number;
    timeStretch: number;
    matteMode?: MatteMode;
    matteTarget?: number;
    isHidden?: boolean;
    matchName?: string;
    masks: Mask[];
    effects: Effect[];
    transform: Transform;
    parent?: any;
    constructor(parent: any);
    get colors(): string[];
    get hasMask(): boolean;
    get totalFrames(): number;
    fromJSON(json: Record<string, any>): Layer;
    toJSON(): Record<string, any>;
}

declare class GroupLayer extends Layer {
    readonly type = LayerType.GROUP;
    fromJSON(json: Record<string, any>): GroupLayer;
}

declare class ImageLayer extends Layer {
    readonly type = LayerType.IMAGE;
    refId: string;
    fromJSON(json: Record<string, any>): ImageLayer;
    toJSON(): Record<string, any>;
}

declare class PrecompositionLayer extends Layer {
    readonly type = LayerType.PRECOMPOSITION;
    height: number;
    refId?: string;
    timeRemap: any;
    width: number;
    fromJSON(json: Record<string, any>): PrecompositionLayer;
    toJSON(): Record<string, any>;
}

declare abstract class Shape {
    abstract readonly type: ShapeType;
    classNames?: string;
    matchName?: string;
    name?: string;
    id?: string;
    itemIndex?: number;
    shapeIndex?: number;
    isHidden: boolean;
    parent: any;
    constructor(parent: any);
    fromJSON(json: Record<string, any>): Shape;
    toJSON(): Record<string, any>;
}

declare class EllipseShape extends Shape {
    readonly type = ShapeType.ELLIPSE;
    position: Property;
    size: Property;
    direction: number;
    fromJSON(json: Record<string, any>): EllipseShape;
    toJSON(): Record<string, any>;
}

declare class FillShape extends Shape {
    readonly type = ShapeType.FILL;
    blendMode: BlendMode;
    direction?: number;
    color: Property;
    fillRule: FillRuleType;
    opacity: Property;
    fromJSON(json: Record<string, any>): FillShape;
    toJSON(): Record<string, any>;
}

declare class GradientFillShape extends Shape {
    readonly type = ShapeType.GRADIENT_FILL;
    blendMode: BlendMode;
    endPoint: Property;
    gradientColors: Gradient;
    gradientType: GradientFillType;
    highlightAngle: Property;
    highlightLength: Property;
    opacity: Property;
    startPoint: Property;
    fillRule: FillRuleType;
    fromJSON(json: Record<string, any>): GradientFillShape;
    toJSON(): Record<string, any>;
}

declare class GroupShape extends Shape {
    readonly type = ShapeType.GROUP;
    blendMode: BlendMode;
    contentPropertyIndex?: number;
    isHidden: boolean;
    numProperties: number;
    propertyIndex?: number;
    transform: Transform;
    shapes: Shape[];
    fromJSON(json: Record<string, any>): GroupShape;
    createShape(type: ShapeType): Shape;
    addShape(shape: ShapeType | Shape): Shape;
    toJSON(): Record<string, any>;
}

declare class PathShape extends Shape {
    readonly type = ShapeType.PATH;
    direction?: number;
    vertices: Property;
    fromJSON(json: Record<string, any>): PathShape;
    toJSON(): Record<string, any>;
}

declare class RectangleShape extends Shape {
    readonly type = ShapeType.RECTANGLE;
    direction?: number;
    position: Property;
    roundness: Property;
    size: Property;
    fromJSON(json: Record<string, any>): RectangleShape;
    toJSON(): Record<string, any>;
}

declare class StrokeShape extends Shape {
    readonly type = ShapeType.STROKE;
    blendMode: BlendMode;
    color: Property;
    lineCapType: LineCapType;
    lineJoinType: LineJoinType;
    miterLimit: number;
    opacity: Property;
    width: Property;
    fromJSON(json: Record<string, any>): StrokeShape;
    toJSON(): Record<string, any>;
}

declare class TrimShape extends Shape {
    readonly type = ShapeType.TRIM;
    blendMode: BlendMode;
    trimEnd: Property;
    trimOffset: Property;
    trimStart: Property;
    trimMultipleShapes: TrimMode;
    fromJSON(json: Record<string, any>): TrimShape;
    toJSON(): Record<string, any>;
}

declare class GradientStrokeShape extends Shape {
    readonly type = ShapeType.GRADIENT_STROKE;
    blendMode: BlendMode;
    endPoint: Property;
    gradientColors: Gradient;
    gradientType: GradientFillType;
    highlightAngle: Property;
    highlightLength: Property;
    opacity: Property;
    startPoint: Property;
    lineCapType: LineCapType;
    lineJoinType: LineJoinType;
    miterLimit: number;
    width: Property;
    fromJSON(json: Record<string, any>): GradientStrokeShape;
    toJSON(): Record<string, any>;
}

declare class RepeaterShape extends Shape {
    readonly type = ShapeType.REPEATER;
    anchor: Property;
    startOpacity: Property;
    endOpacity: Property;
    position: Property;
    rotation: Property;
    scale: Property;
    shapes: Shape[];
    skew: Property;
    skewAxis: Property;
    copies: Property;
    offset: Property;
    composition: RepeaterComposite;
    fromJSON(json: Record<string, any>): RepeaterShape;
    toJSON(): Record<string, any>;
}

declare class StarShape extends Shape {
    readonly type = ShapeType.STAR;
    position: Property;
    innerRadius: Property;
    innerRoundness: Property;
    outerRadius: Property;
    outerRoundness: Property;
    rotation: Property;
    points: Property;
    starType: StarType;
    direction?: number;
    fromJSON(json: Record<string, any>): StarShape;
    toJSON(): Record<string, any>;
}

declare class RoundedCornersShape extends Shape {
    readonly type = ShapeType.ROUNDED_CORNERS;
    roundness: Property;
    fromJSON(json: Record<string, any>): RoundedCornersShape;
    toJSON(): Record<string, any>;
}

declare class MergeShape extends Shape {
    readonly type = ShapeType.MERGE;
    mergeMode: number;
    fromJSON(json: Record<string, any>): MergeShape;
    toJSON(): Record<string, any>;
}

declare class OffsetPathShape extends Shape {
    readonly type = ShapeType.OFFSET_PATH;
    amount: Property;
    lineJoin: LineJoinType;
    miterLimit: Property;
    fromJSON(json: Record<string, any>): OffsetPathShape;
    toJSON(): Record<string, any>;
}

declare class PuckerBloatShape extends Shape {
    readonly type = ShapeType.PUCKER_BLOAT;
    amount: Property;
    fromJSON(json: Record<string, any>): PuckerBloatShape;
    toJSON(): Record<string, any>;
}

declare class TwistShape extends Shape {
    readonly type = ShapeType.TWIST;
    angle: Property;
    center: Property;
    fromJSON(json: Record<string, any>): TwistShape;
    toJSON(): Record<string, any>;
}

declare class ZigZagShape extends Shape {
    readonly type = ShapeType.ZIG_ZAG;
    radius: Property;
    distance: Property;
    numberOfRidges: Property;
    fromJSON(json: Record<string, any>): ZigZagShape;
    toJSON(): Record<string, any>;
}

declare class ShapeLayer extends Layer {
    readonly type = LayerType.SHAPE;
    shapes: Shape[];
    createShape(type: ShapeType): Shape;
    addShape(shape: ShapeType | Shape): Shape;
    createShapeFromJSON(json: Record<string, any>): Shape;
    fromJSON(json: Record<string, any>): ShapeLayer;
    toJSON(): Record<string, any>;
}

declare class SolidLayer extends Layer {
    readonly type = LayerType.SOLID;
    solidColor: string;
    solidHeight: number;
    solidWidth: number;
    fromJSON(json: Record<string, any>): SolidLayer;
    toJSON(): Record<string, any>;
}

declare class TextSelector {
    startTime: number;
    randomize: boolean;
    textShape: TextShape;
    basedOn: TextBased;
    maxEase: Property;
    minEase: Property;
    maxAmount: Property;
    rangeUnits?: number;
    offset?: Property;
    expressionSelector?: Property;
    start?: Property;
    end?: Property;
    fromJSON(json: Record<string, any>): TextSelector;
    toJSON(): Record<string, any>;
}

declare class TextTransform {
    anchor?: Property;
    opacity?: Property;
    position?: Property;
    rotation?: Property;
    scale?: Property;
    skew?: Property;
    skewAxis?: Property;
    rotationX?: Property;
    rotationY?: Property;
    strokeWidth?: Property;
    strokeColor?: Property;
    fillColor?: Property;
    fillSaturation?: Property;
    fillHue?: Property;
    fillBrightness?: Property;
    tracking?: Property;
    fromJSON(json: Record<string, any>): this;
    toJSON(): Record<string, any>;
}

declare class TextAnimator {
    name: string;
    transform: TextTransform;
    selector: TextSelector;
    fromJSON(json: Record<string, any>): TextAnimator;
    toJSON(): Record<string, any>;
}

declare class TextOptions {
    alignment: Property;
    grouping: TextGrouping;
    fromJSON(json: Record<string, any>): TextOptions;
    toJSON(): Record<string, any>;
}

declare class TextData {
    textDocument: Property;
    textOptions: TextOptions;
    maskedPath: any;
    textAnimators: TextAnimator[];
    fromJSON(json: Record<string, any>): TextData;
    createTextAnimator(json: Record<string, any>): TextAnimator;
    toJSON(): Record<string, any>;
}

declare class TextLayer extends Layer {
    readonly type = LayerType.TEXT;
    textData?: TextData;
    fromJSON(json: Record<string, any>): TextLayer;
    toJSON(): Record<string, any>;
}

declare class PrecompositionAsset extends Asset {
    readonly type = AssetType.PRECOMPOSITION;
    layers: Layer[];
    id: string;
    timeRemap: any;
    fromJSON(json: Record<string, any>): PrecompositionAsset;
    toJSON(): Record<string, any>;
}

declare class Character {
    character: string;
    fontSize: number;
    fontStyle: string;
    fontWeight: number;
    data: Shape[];
    fontFamily: string;
    createShape(type: ShapeType): Shape;
    createShapeFromJSON(json: Record<string, any>): Shape;
    fromJSON(json: Record<string, any>): Character;
    toJSON(): Record<string, any>;
}

declare class Font {
    fName: string;
    fFamily: string;
    fStyle: string;
    ascent: number;
    fPath: string;
    fWeight: string;
    origin: number;
    fClass: string;
    fromJSON(json: Record<string, any>): Font;
    toJSON(): Record<string, any>;
}

declare class FontList {
    list: Font[];
    fromJSON(json: Record<string, any>): FontList;
    toJSON(): Record<string, any>;
}

declare class Marker {
    comment: string;
    duration: number;
    time: number;
    fromJSON(json: Record<string, any>): Marker;
    toJSON(): Record<string, any>;
}

declare class Meta {
    author?: string;
    keywords: string[];
    generator: string | undefined;
    description?: string;
    themeColor?: string;
    protected parent: any;
    constructor(parent: any);
    fromJSON(json: Record<string, any>): Meta;
    toJSON(): Record<string, any>;
}

declare class Animation {
    assets: Asset[];
    frameRate: number;
    height: number;
    inPoint: number;
    is3D: boolean;
    layers: Layer[];
    markers: Marker[];
    meta: Meta;
    name: string;
    outPoint: number;
    version: string;
    width: number;
    fonts: FontList;
    characters: Character[];
    static fromURL(url: string): Promise<Animation>;
    static isLottie(json: Record<string, any>): boolean;
    get colors(): Color[];
    get colorsVerbose(): Record<string, any>;
    get textLayers(): Record<string, any>;
    parentPath(shape: any, paths?: string[]): string[];
    get duration(): number;
    get fileSize(): number;
    get totalFrames(): number;
    createAsset(type: AssetType): Asset;
    createAssetFromJSON(json: Record<string, any>): Asset;
    createLayer(type: LayerType): Layer;
    createLayerFromJSON(json: Record<string, any>): Layer;
    createLayersFromJSONArray(jsonLayers: Record<string, any>[]): Layer[];
    createMarker(): Marker;
    createMarkerFromJSON(json: Record<string, any>): Marker;
    fromJSON(json: Record<string, any>): Animation;
    getLayerById(id: string): Layer | undefined;
    getShapeById(id: string): Shape | null;
    getShapesByClassName(className: string): Shape[];
    getLayersByClassName(className: string): Layer[];
    getLayersByType(type: LayerType): Layer[];
    toJSON(key?: string): Record<string, any> | undefined;
}

declare function useRegistry(): Map<Property, any>;

declare function rgbaToHex(rgba: number[]): string;
declare function hexToRgba(hex: string, alpha: number | null): number[];
declare function websafeColors(colors: Color[]): Color[];

export { Animation, Asset, AssetType, BlendMode, Character, Color, ColorRgb, ColorRgba, Effect, EffectType, EffectValue, EffectValueType, EllipseShape, FillRuleType, FillShape, Font, FontList, Gradient, GradientFillShape, GradientFillType, GradientStop, GradientStrokeShape, GradientStrokeType, GroupLayer, GroupShape, ImageAsset, ImageLayer, KeyFrame, Layer, LayerType, LineCapType, LineJoinType, Marker, Mask, MaskMode, MatteMode, MergeShape, Meta, OffsetPathShape, PathShape, PrecompositionAsset, PrecompositionLayer, Property, PropertyType, PuckerBloatShape, RectangleShape, RepeaterComposite, RepeaterShape, RoundedCornersShape, Shape, ShapeLayer, ShapeType, SolidLayer, StarShape, StarType, StrokeShape, TextAnimator, TextBased, TextCaps, TextData, TextDocument, TextGrouping, TextJustify, TextLayer, TextOptions, TextSelector, TextShape, TextTransform, Transform, TrimMode, TrimShape, TwistShape, Value, ZigZagShape, hexToRgba, rgbaToHex, useRegistry, websafeColors };
