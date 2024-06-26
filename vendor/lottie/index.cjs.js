/*!
 * @lottiefiles/lottie-js - v0.4.2
 * Compiled Mon, 24 Jul 2023 06:49:24 UTC
 *
 * Copyright LottieFiles. All rights reserved.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fetch = require('cross-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

class Asset {
  constructor(parent) {
    this.parent = parent;
  }
}

class ImageAsset extends Asset {
  fromJSON(json) {
    this.data = json.p;
    this.id = json.id;
    this.height = json.h;
    this.path = json.u;
    this.width = json.w;
    return this;
  }
  toJSON() {
    return {
      h: this.height,
      id: this.id,
      p: this.data,
      u: this.path,
      w: this.width
    };
  }
}

(function(AssetType2) {
  AssetType2[AssetType2["PRECOMPOSITION"] = 0] = "PRECOMPOSITION";
  AssetType2[AssetType2["IMAGE"] = 1] = "IMAGE";
})(exports.AssetType || (exports.AssetType = {}));

class PrecompositionAsset extends Asset {
  constructor() {
    super(...arguments);
    this.type = exports.AssetType.PRECOMPOSITION;
    this.layers = [];
    this.id = "";
  }
  fromJSON(json) {
    this.id = json.id;
    this.timeRemap = json.tm;
    this.layers = this.parent.createLayersFromJSONArray(json.layers);
    return this;
  }
  toJSON() {
    return {
      id: this.id,
      layers: this.layers.map((layer) => layer.toJSON()),
      tm: this.timeRemap
    };
  }
}

(function(BlendMode2) {
  BlendMode2[BlendMode2["NORMAL"] = 0] = "NORMAL";
  BlendMode2[BlendMode2["MULTIPLY"] = 1] = "MULTIPLY";
  BlendMode2[BlendMode2["SCREEN"] = 2] = "SCREEN";
  BlendMode2[BlendMode2["OVERLAY"] = 3] = "OVERLAY";
  BlendMode2[BlendMode2["DARKEN"] = 4] = "DARKEN";
  BlendMode2[BlendMode2["LIGHTEN"] = 5] = "LIGHTEN";
  BlendMode2[BlendMode2["COLOR_DODGE"] = 6] = "COLOR_DODGE";
  BlendMode2[BlendMode2["COLOR_BURN"] = 7] = "COLOR_BURN";
  BlendMode2[BlendMode2["HARD_LIGHT"] = 8] = "HARD_LIGHT";
  BlendMode2[BlendMode2["SOFT_LIGHT"] = 9] = "SOFT_LIGHT";
  BlendMode2[BlendMode2["DIFFERENCE"] = 10] = "DIFFERENCE";
  BlendMode2[BlendMode2["EXCLUSION"] = 11] = "EXCLUSION";
  BlendMode2[BlendMode2["HUE"] = 12] = "HUE";
  BlendMode2[BlendMode2["SATURATION"] = 13] = "SATURATION";
  BlendMode2[BlendMode2["COLOR"] = 14] = "COLOR";
  BlendMode2[BlendMode2["LUMINOSITY"] = 15] = "LUMINOSITY";
})(exports.BlendMode || (exports.BlendMode = {}));

(function(FillRuleType2) {
  FillRuleType2[FillRuleType2["EVEN_ODD"] = 1] = "EVEN_ODD";
  FillRuleType2[FillRuleType2["NONZERO"] = 2] = "NONZERO";
})(exports.FillRuleType || (exports.FillRuleType = {}));

(function(GradientFillType2) {
  GradientFillType2[GradientFillType2["NONE"] = 0] = "NONE";
  GradientFillType2[GradientFillType2["LINEAR"] = 1] = "LINEAR";
  GradientFillType2[GradientFillType2["RADIAL"] = 2] = "RADIAL";
  GradientFillType2[GradientFillType2["ANGULAR"] = 4] = "ANGULAR";
  GradientFillType2[GradientFillType2["REFLECTED"] = 5] = "REFLECTED";
  GradientFillType2[GradientFillType2["DIAMOND"] = 6] = "DIAMOND";
})(exports.GradientFillType || (exports.GradientFillType = {}));

(function(GradientStrokeType2) {
  GradientStrokeType2[GradientStrokeType2["LINEAR"] = 1] = "LINEAR";
  GradientStrokeType2[GradientStrokeType2["RADIAL"] = 2] = "RADIAL";
})(exports.GradientStrokeType || (exports.GradientStrokeType = {}));

(function(LayerType2) {
  LayerType2[LayerType2["PRECOMPOSITION"] = 0] = "PRECOMPOSITION";
  LayerType2[LayerType2["SOLID"] = 1] = "SOLID";
  LayerType2[LayerType2["IMAGE"] = 2] = "IMAGE";
  LayerType2[LayerType2["GROUP"] = 3] = "GROUP";
  LayerType2[LayerType2["SHAPE"] = 4] = "SHAPE";
  LayerType2[LayerType2["TEXT"] = 5] = "TEXT";
  LayerType2[LayerType2["AUDIO"] = 6] = "AUDIO";
  LayerType2[LayerType2["VIDEO_PLACEHOLDER"] = 7] = "VIDEO_PLACEHOLDER";
  LayerType2[LayerType2["IMAGE_SEQUENCE"] = 8] = "IMAGE_SEQUENCE";
  LayerType2[LayerType2["VIDEO"] = 9] = "VIDEO";
  LayerType2[LayerType2["IMAGE_PLACEHOLDER"] = 10] = "IMAGE_PLACEHOLDER";
  LayerType2[LayerType2["GUIDE"] = 11] = "GUIDE";
  LayerType2[LayerType2["ADJUSTMENT"] = 12] = "ADJUSTMENT";
  LayerType2[LayerType2["CAMERA"] = 13] = "CAMERA";
  LayerType2[LayerType2["LIGHT"] = 14] = "LIGHT";
})(exports.LayerType || (exports.LayerType = {}));

(function(LineCapType2) {
  LineCapType2[LineCapType2["BUTT"] = 1] = "BUTT";
  LineCapType2[LineCapType2["ROUND"] = 2] = "ROUND";
  LineCapType2[LineCapType2["PROJECTING"] = 3] = "PROJECTING";
})(exports.LineCapType || (exports.LineCapType = {}));

(function(LineJoinType2) {
  LineJoinType2[LineJoinType2["MITER"] = 1] = "MITER";
  LineJoinType2[LineJoinType2["ROUND"] = 2] = "ROUND";
  LineJoinType2[LineJoinType2["BEVEL"] = 3] = "BEVEL";
})(exports.LineJoinType || (exports.LineJoinType = {}));

(function(MaskMode2) {
  MaskMode2["None"] = "n";
  MaskMode2["Add"] = "a";
  MaskMode2["Subtract"] = "s";
  MaskMode2["Intersect"] = "i";
  MaskMode2["Lighten"] = "l";
  MaskMode2["Darken"] = "d";
  MaskMode2["Difference"] = "f";
})(exports.MaskMode || (exports.MaskMode = {}));

(function(PropertyType2) {
  PropertyType2["AMOUNT"] = "am";
  PropertyType2["ANCHOR"] = "a";
  PropertyType2["ANGLE"] = "an";
  PropertyType2["OPACITY"] = "o";
  PropertyType2["POSITION"] = "p";
  PropertyType2["POINTS"] = "pt";
  PropertyType2["ROTATION"] = "r";
  PropertyType2["ROTATION_X"] = "rx";
  PropertyType2["ROTATION_Y"] = "ry";
  PropertyType2["ROTATION_Z"] = "rz";
  PropertyType2["SCALE"] = "s";
  PropertyType2["SKEW_AXIS"] = "sa";
  PropertyType2["SKEW"] = "sk";
  PropertyType2["SHAPE"] = "sh";
  PropertyType2["EXPANSION"] = "x";
  PropertyType2["FEATHER"] = "f";
  PropertyType2["SIZE"] = "sz";
  PropertyType2["ROUNDNESS"] = "rd";
  PropertyType2["MITER_LIMIT"] = "ml";
  PropertyType2["STROKE_WIDTH"] = "sw";
  PropertyType2["NUMBER"] = "nu";
  PropertyType2["COLOR"] = "cl";
  PropertyType2["ORIENTATION"] = "or";
  PropertyType2["GRADIENT"] = "gr";
  PropertyType2["EFFECT_VALUE"] = "v";
  PropertyType2["TEXT_DATA"] = "d";
  PropertyType2["TEXT_ALIGNMENT"] = "ta";
  PropertyType2["MAX_EASE"] = "xe";
  PropertyType2["MIN_EASE"] = "ne";
  PropertyType2["MAX_AMOUNT"] = "ma";
  PropertyType2["RANGE_UNITS"] = "rn";
  PropertyType2["OFFSET"] = "of";
  PropertyType2["EXPRESSION_SELECTOR"] = "sm";
  PropertyType2["START"] = "st";
  PropertyType2["END"] = "e";
  PropertyType2["SATURATION"] = "fs";
  PropertyType2["HUE"] = "fh";
  PropertyType2["BRIGHTNESS"] = "fb";
  PropertyType2["TEXT_TRACKING"] = "t";
  PropertyType2["CENTER"] = "cn";
  PropertyType2["RADIUS"] = "ra";
  PropertyType2["DISTANCE"] = "ds";
})(exports.PropertyType || (exports.PropertyType = {}));

(function(ShapeType2) {
  ShapeType2["ELLIPSE"] = "el";
  ShapeType2["FILL"] = "fl";
  ShapeType2["GRADIENT_FILL"] = "gf";
  ShapeType2["GRADIENT_STROKE"] = "gs";
  ShapeType2["GROUP"] = "gr";
  ShapeType2["MERGE"] = "mm";
  ShapeType2["OFFSET_PATH"] = "op";
  ShapeType2["PATH"] = "sh";
  ShapeType2["RECTANGLE"] = "rc";
  ShapeType2["REPEATER"] = "rp";
  ShapeType2["ROUNDED_CORNERS"] = "rd";
  ShapeType2["STAR"] = "sr";
  ShapeType2["STROKE"] = "st";
  ShapeType2["TRIM"] = "tm";
  ShapeType2["TWIST"] = "tw";
  ShapeType2["PUCKER_BLOAT"] = "pb";
  ShapeType2["ZIG_ZAG"] = "zz";
})(exports.ShapeType || (exports.ShapeType = {}));

(function(TrimMode2) {
  TrimMode2[TrimMode2["SIMULTANEOUSLY"] = 1] = "SIMULTANEOUSLY";
  TrimMode2[TrimMode2["INDIVIDUALLY"] = 2] = "INDIVIDUALLY";
})(exports.TrimMode || (exports.TrimMode = {}));

(function(RepeaterComposite2) {
  RepeaterComposite2[RepeaterComposite2["ABOVE"] = 1] = "ABOVE";
  RepeaterComposite2[RepeaterComposite2["BELOW"] = 2] = "BELOW";
})(exports.RepeaterComposite || (exports.RepeaterComposite = {}));

(function(StarType2) {
  StarType2[StarType2["STAR"] = 1] = "STAR";
  StarType2[StarType2["POLYGON"] = 2] = "POLYGON";
})(exports.StarType || (exports.StarType = {}));

(function(MatteMode2) {
  MatteMode2[MatteMode2["NORMAL"] = 0] = "NORMAL";
  MatteMode2[MatteMode2["ALPHA"] = 1] = "ALPHA";
  MatteMode2[MatteMode2["INVERTED_ALPHA"] = 2] = "INVERTED_ALPHA";
  MatteMode2[MatteMode2["LUMA"] = 3] = "LUMA";
  MatteMode2[MatteMode2["INVERTED_LUMA"] = 4] = "INVERTED_LUMA";
})(exports.MatteMode || (exports.MatteMode = {}));

(function(EffectType2) {
  EffectType2[EffectType2["NONE"] = 0] = "NONE";
  EffectType2[EffectType2["CUSTOM"] = 5] = "CUSTOM";
  EffectType2[EffectType2["PAINT_OVER_TRANSPARENT"] = 7] = "PAINT_OVER_TRANSPARENT";
  EffectType2[EffectType2["TINT"] = 20] = "TINT";
  EffectType2[EffectType2["FILL"] = 21] = "FILL";
  EffectType2[EffectType2["STROKE"] = 22] = "STROKE";
  EffectType2[EffectType2["TRITONE"] = 23] = "TRITONE";
  EffectType2[EffectType2["PRO_LEVELS"] = 24] = "PRO_LEVELS";
  EffectType2[EffectType2["DROP_SHADOW"] = 25] = "DROP_SHADOW";
  EffectType2[EffectType2["RADIAL_WIPE"] = 26] = "RADIAL_WIPE";
  EffectType2[EffectType2["DISPLACEMENT_MAP"] = 27] = "DISPLACEMENT_MAP";
  EffectType2[EffectType2["MATTE3"] = 28] = "MATTE3";
  EffectType2[EffectType2["GAUSSIAN_BLUR"] = 29] = "GAUSSIAN_BLUR";
  EffectType2[EffectType2["MESH_WRAP"] = 31] = "MESH_WRAP";
  EffectType2[EffectType2["WAVY"] = 32] = "WAVY";
  EffectType2[EffectType2["SPHERIZE"] = 33] = "SPHERIZE";
  EffectType2[EffectType2["PUPPET"] = 34] = "PUPPET";
})(exports.EffectType || (exports.EffectType = {}));

(function(EffectValueType2) {
  EffectValueType2[EffectValueType2["SLIDER"] = 0] = "SLIDER";
  EffectValueType2[EffectValueType2["ANGLE"] = 1] = "ANGLE";
  EffectValueType2[EffectValueType2["COLOR"] = 2] = "COLOR";
  EffectValueType2[EffectValueType2["POINT"] = 3] = "POINT";
  EffectValueType2[EffectValueType2["CHECKBOX"] = 4] = "CHECKBOX";
  EffectValueType2[EffectValueType2["IGNORED"] = 6] = "IGNORED";
  EffectValueType2[EffectValueType2["DROPDOWN"] = 7] = "DROPDOWN";
  EffectValueType2[EffectValueType2["LAYER"] = 10] = "LAYER";
})(exports.EffectValueType || (exports.EffectValueType = {}));

(function(TextCaps2) {
  TextCaps2[TextCaps2["REGULAR"] = 0] = "REGULAR";
  TextCaps2[TextCaps2["ALL_CAPS"] = 1] = "ALL_CAPS";
  TextCaps2[TextCaps2["SMALL_CAPS"] = 2] = "SMALL_CAPS";
})(exports.TextCaps || (exports.TextCaps = {}));

(function(TextGrouping2) {
  TextGrouping2[TextGrouping2["CHARACTERS"] = 1] = "CHARACTERS";
  TextGrouping2[TextGrouping2["WORD"] = 2] = "WORD";
  TextGrouping2[TextGrouping2["LINE"] = 3] = "LINE";
  TextGrouping2[TextGrouping2["ALL"] = 4] = "ALL";
})(exports.TextGrouping || (exports.TextGrouping = {}));

(function(TextJustify2) {
  TextJustify2[TextJustify2["LEFT"] = 0] = "LEFT";
  TextJustify2[TextJustify2["RIGHT"] = 1] = "RIGHT";
  TextJustify2[TextJustify2["CENTER"] = 2] = "CENTER";
  TextJustify2[TextJustify2["JUSTIFY_LAST_LINE_LEFT"] = 3] = "JUSTIFY_LAST_LINE_LEFT";
  TextJustify2[TextJustify2["JUSTIFY_LAST_LINE_RIGHT"] = 4] = "JUSTIFY_LAST_LINE_RIGHT";
  TextJustify2[TextJustify2["JUSTIFY_LAST_LINE_CENTER"] = 5] = "JUSTIFY_LAST_LINE_CENTER";
  TextJustify2[TextJustify2["JUSTIFY_LAST_LINE_FULL"] = 6] = "JUSTIFY_LAST_LINE_FULL";
})(exports.TextJustify || (exports.TextJustify = {}));

(function(TextBased2) {
  TextBased2[TextBased2["CHARACTERS"] = 1] = "CHARACTERS";
  TextBased2[TextBased2["CHARACTER_EXCLUDING_SPACES"] = 2] = "CHARACTER_EXCLUDING_SPACES";
  TextBased2[TextBased2["WORDS"] = 3] = "WORDS";
  TextBased2[TextBased2["LINES"] = 4] = "LINES";
})(exports.TextBased || (exports.TextBased = {}));

(function(TextShape2) {
  TextShape2[TextShape2["SQUARE"] = 1] = "SQUARE";
  TextShape2[TextShape2["RAMP_UP"] = 2] = "RAMP_UP";
  TextShape2[TextShape2["RAMP_DOWN"] = 3] = "RAMP_DOWN";
  TextShape2[TextShape2["TRIANGLE"] = 4] = "TRIANGLE";
  TextShape2[TextShape2["ROUND"] = 5] = "ROUND";
  TextShape2[TextShape2["SMOOTH"] = 6] = "SMOOTH";
})(exports.TextShape || (exports.TextShape = {}));

class KeyFrame {
  constructor(frame = 0, value = 0) {
    this.frame = 0;
    this.value = 0;
    this.frameInTangent = [0, 0];
    this.frameOutTangent = [1, 1];
    this.hold = false;
    this.frame = frame;
    this.value = value;
  }
  fromJSON(json, valueClass = void 0) {
    this.frame = json.t;
    if (valueClass === void 0)
      this.value = json.s;
    else
      this.value = valueClass.fromJSON(json.s);
    const hasFrameTangents = "i" in json && "o" in json;
    const hasValueTangents = "ti" in json && "to" in json;
    this.frameInTangent = hasFrameTangents ? [json.i.x, json.i.y] : void 0;
    this.frameOutTangent = hasFrameTangents ? [json.o.x, json.o.y] : void 0;
    if (hasValueTangents) {
      if (json.ti && "x" in json.ti && "y" in json.ti) {
        this.valueInTangent = [json.ti.x, json.ti.y];
      } else {
        this.valueInTangent = json.ti;
      }
      if (json.to && "x" in json.to && "y" in json.to) {
        this.valueOutTangent = [json.to.x, json.to.y];
      } else {
        this.valueOutTangent = json.to;
      }
    }
    this.hold = "h" in json && json.h;
    return this;
  }
  toJSON() {
    const json = {
      t: this.frame,
      s: this.value
    };
    if (this.hold) {
      json.h = 1;
    } else if (this.frameInTangent && this.frameOutTangent) {
      json.i = {x: this.frameInTangent[0], y: this.frameInTangent[1]};
      json.o = {x: this.frameOutTangent[0], y: this.frameOutTangent[1]};
    }
    if (this.valueInTangent && this.valueOutTangent) {
      json.ti = this.valueInTangent;
      json.to = this.valueOutTangent;
    }
    return json;
  }
}

const registry = new Map();
function useRegistry() {
  return registry;
}

class Color {
  toJSON() {
    return this.toRgbArray();
  }
  toJSONWebsafe() {
    return this.toRgbArrayWebsafe();
  }
  static fromJSON(json) {
    if (json.length > 3)
      return ColorRgba.fromJSON(json);
    else if (json.length == 3)
      return ColorRgb.fromJSON(json);
    else
      return new ColorRgb(0, 0, 0);
  }
}
class ColorRgb extends Color {
  constructor(r, g, b) {
    super();
    this.r = r;
    this.g = g;
    this.b = b;
  }
  websafeColors() {
    this.r = Math.round(this.r * 255);
    this.g = Math.round(this.g * 255);
    this.b = Math.round(this.b * 255);
  }
  toRgbArray() {
    return [this.r, this.g, this.b];
  }
  toRgbArrayWebsafe() {
    return [this.r * 255, this.g * 255, this.b * 255];
  }
  static fromJSON(json) {
    return new ColorRgb(json[0], json[1], json[2]);
  }
}
class ColorRgba extends ColorRgb {
  constructor(r, g, b, a = 1) {
    super(r, g, b);
    this.a = a;
  }
  websafeColors() {
    this.r = Math.round(this.r * 255);
    this.g = Math.round(this.g * 255);
    this.b = Math.round(this.b * 255);
  }
  toRgbArray() {
    return [this.r, this.g, this.b, this.a];
  }
  toRgbArrayWebsafe() {
    return [this.r * 255, this.g * 255, this.b * 255, this.a];
  }
  static fromJSON(json) {
    return new ColorRgba(json[0], json[1], json[2], json[3]);
  }
}

class TextDocument {
  constructor() {
    this.fontFamily = "";
    this.fontColor = new ColorRgb(0, 0, 0);
    this.fontSize = 0;
    this.text = "";
  }
  static fromJSON(json) {
    const document = new TextDocument();
    document.fontFamily = json.f;
    document.fontColor = Color.fromJSON(json.fc);
    document.fontSize = json.s;
    document.lineHeight = json.lh;
    document.boxSize = json.sz;
    document.text = json.t;
    document.justify = json.j;
    document.textCaps = json.ca;
    document.textTracking = json.tr;
    document.strokeWidth = json.sw;
    if ("sc" in json) {
      document.strokeColor = Color.fromJSON(json.sc);
    }
    return document;
  }
  toJSON() {
    return {
      f: this.fontFamily,
      fc: this.fontColor,
      s: this.fontSize,
      lh: this.lineHeight,
      sz: this.boxSize,
      t: this.text,
      j: this.justify,
      ca: this.textCaps,
      tr: this.textTracking,
      sc: this.strokeColor,
      sw: this.strokeWidth
    };
  }
}

class Property {
  constructor(parent, type, values2 = []) {
    this.UID = 0;
    this.isAnimated = false;
    this.values = [];
    this._parent = parent;
    this.type = type;
    this.values = values2;
    this.isAnimated = values2.length > 1;
    useRegistry().set(this, parent);
  }
  getParent() {
    return this._parent;
  }
  fromJSON(json) {
    this.expression = "x" in json ? json.x : void 0;
    this.index = json.ix;
    this.isAnimated = json.a === 1;
    let valueClass = void 0;
    if (this.type == exports.PropertyType.COLOR)
      valueClass = Color;
    else if (this.type == exports.PropertyType.TEXT_DATA)
      valueClass = TextDocument;
    this.values = this.isAnimated || this.type == exports.PropertyType.TEXT_DATA ? json.k.map((v) => new KeyFrame().fromJSON(v, valueClass)) : [new KeyFrame().fromJSON({t: 0, s: json.k}, valueClass)];
    if (this.type === exports.PropertyType.COLOR) {
      this.maxColors = "p" in json ? json.p : void 0;
    }
    return this;
  }
  toJSON() {
    let value;
    const animated = this.isAnimated || this.values.length > 1 || this.type === exports.PropertyType.TEXT_DATA;
    if (animated) {
      value = this.values;
    } else {
      value = this.values.length ? this.values[0].value : 0;
    }
    return {
      x: this.expression,
      ix: this.index,
      a: animated ? 1 : 0,
      k: value,
      p: this.maxColors
    };
  }
}

class GradientStop {
  constructor(offset = 0, color = []) {
    this.offset = offset;
    this.color = color;
  }
  get hasAlpha() {
    return this.color.length > 3;
  }
  get red() {
    return this.color[0];
  }
  get green() {
    return this.color[1];
  }
  get blue() {
    return this.color[2];
  }
  get alpha() {
    return this.color[3];
  }
}
class GradientColorsProperty extends Property {
  constructor() {
    super(...arguments);
    this.colorCount = 0;
  }
  keyframeValue(index) {
    if (index >= this.values.length)
      return [];
    return this.values[index].value;
  }
  keyframeHasAlpha(index) {
    return this.keyframeValue(index).length == this.colorCount * 6;
  }
  keframeStops(index) {
    const values = this.keyframeValue(index);
    const stops = [];
    const hasAlpha = this.keyframeHasAlpha(index);
    for (let i = 0; i < this.colorCount; i++) {
      const color = values.slice(i, 3);
      if (hasAlpha)
        color.push(values[this.colorCount * 4 + i * 2]);
      stops.push(new GradientStop(values[i * 4], color));
    }
    return stops;
  }
  setKeyframeStops(index, stops) {
    if (index >= this.values.length)
      return;
    if (stops.length > this.colorCount)
      this.colorCount = stops.length;
    this.values[index].value = this.stopsToArray(stops);
  }
  addKeyframe(frame, stops) {
    const keyframe = new KeyFrame(frame, this.stopsToArray(stops));
    if (stops.length > this.colorCount)
      this.colorCount = stops.length;
    this.values.push(keyframe);
    return keyframe;
  }
  stopsToArray(stops) {
    let hasAlpha = false;
    const result = [];
    for (const color of stops) {
      result.push(color.offset);
      result.push(color.red);
      result.push(color.green);
      result.push(color.blue);
      if (color.hasAlpha)
        hasAlpha = true;
    }
    if (hasAlpha) {
      for (const color of stops) {
        result.push(color.offset);
        result.push(color.alpha !== void 0 ? color.alpha : 1);
      }
    }
    return result;
  }
}
class Gradient {
  constructor() {
    this.gradientColors = new GradientColorsProperty(this, exports.PropertyType.GRADIENT);
  }
  get colorCount() {
    return this.gradientColors.colorCount;
  }
  set colorCount(count) {
    this.gradientColors.colorCount = count;
  }
  toJSON() {
    return {
      p: this.colorCount,
      k: this.gradientColors
    };
  }
  fromJSON(json) {
    this.gradientColors.fromJSON(json.k);
    this.colorCount = json.p;
    return this;
  }
}

class Transform {
  constructor() {
    this.anchor = new Property(this, exports.PropertyType.ANCHOR, [new KeyFrame(0, [0, 0])]);
    this.opacity = new Property(this, exports.PropertyType.OPACITY, [new KeyFrame(0, 100)]);
    this.position = new Property(this, exports.PropertyType.POSITION, [new KeyFrame(0, [0, 0])]);
    this.rotation = new Property(this, exports.PropertyType.ROTATION, [new KeyFrame(0, 0)]);
    this.scale = new Property(this, exports.PropertyType.SCALE, [new KeyFrame(0, [100, 100])]);
    this.skew = new Property(this, exports.PropertyType.SKEW);
    this.skewAxis = new Property(this, exports.PropertyType.SKEW_AXIS);
  }
  fromJSON(json) {
    this.rotation = "r" in json ? new Property(this, exports.PropertyType.ROTATION).fromJSON(json.r) : void 0;
    "o" in json && this.opacity.fromJSON(json.o);
    "p" in json && this.position.fromJSON(json.p);
    "a" in json && this.anchor.fromJSON(json.a);
    "s" in json && this.scale.fromJSON(json.s);
    this.skew = "sk" in json ? new Property(this, exports.PropertyType.SKEW).fromJSON(json.sk) : void 0;
    this.skewAxis = "sa" in json ? new Property(this, exports.PropertyType.SKEW_AXIS).fromJSON(json.sa) : void 0;
    if ("or" in json) {
      this.orientation = new Property(this, exports.PropertyType.ORIENTATION).fromJSON(json.or);
    }
    if ("rx" in json) {
      this.rotationX = new Property(this, exports.PropertyType.ROTATION_X).fromJSON(json.rx);
    }
    if ("ry" in json) {
      this.rotationY = new Property(this, exports.PropertyType.ROTATION_Y).fromJSON(json.ry);
    }
    if ("rz" in json) {
      this.rotationZ = new Property(this, exports.PropertyType.ROTATION_Z).fromJSON(json.rz);
    }
    return this;
  }
  toJSON() {
    return {
      a: this.anchor,
      o: this.opacity,
      p: this.position,
      r: this.rotation,
      s: this.scale,
      sk: this.skew,
      sa: this.skewAxis,
      rx: this.rotationX,
      ry: this.rotationY,
      rz: this.rotationZ,
      or: this.orientation
    };
  }
}

class Shape {
  constructor(parent) {
    this.isHidden = false;
    this.parent = parent;
  }
  fromJSON(json) {
    this.classNames = json.cl;
    this.id = json.ln;
    this.isHidden = json.hd;
    this.matchName = json.mn;
    this.name = json.nm;
    return this;
  }
  toJSON() {
    return {
      ty: this.type,
      cl: this.classNames,
      hd: this.isHidden,
      ln: this.id,
      mn: this.matchName,
      nm: this.name
    };
  }
}

class EllipseShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.ELLIPSE;
    this.position = new Property(this, exports.PropertyType.POSITION);
    this.size = new Property(this, exports.PropertyType.SIZE);
    this.direction = 1;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.position.fromJSON(json.p);
    this.size.fromJSON(json.s);
    this.direction = json.d;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      p: this.position,
      s: this.size,
      d: this.direction
    });
  }
}

class FillShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.FILL;
    this.blendMode = exports.BlendMode.NORMAL;
    this.color = new Property(this, exports.PropertyType.COLOR);
    this.fillRule = exports.FillRuleType.EVEN_ODD;
    this.opacity = new Property(this, exports.PropertyType.OPACITY, [new KeyFrame(0, 100)]);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.blendMode = json.bm;
    this.color.fromJSON(json.c);
    this.fillRule = json.r in exports.FillRuleType ? json.r : exports.FillRuleType.EVEN_ODD;
    this.opacity.fromJSON(json.o);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      bm: this.blendMode,
      c: this.color,
      r: this.fillRule,
      o: this.opacity
    });
  }
}

class GradientFillShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.GRADIENT_FILL;
    this.blendMode = exports.BlendMode.NORMAL;
    this.endPoint = new Property(this, exports.PropertyType.POSITION);
    this.gradientColors = new Gradient();
    this.gradientType = exports.GradientFillType.LINEAR;
    this.highlightAngle = new Property(this, exports.PropertyType.NUMBER);
    this.highlightLength = new Property(this, exports.PropertyType.NUMBER);
    this.opacity = new Property(this, exports.PropertyType.OPACITY);
    this.startPoint = new Property(this, exports.PropertyType.POSITION);
    this.fillRule = exports.FillRuleType.EVEN_ODD;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.blendMode = json.bm;
    this.endPoint.fromJSON(json.e);
    this.gradientColors.fromJSON(json.g);
    this.gradientType = json.t;
    this.opacity.fromJSON(json.o);
    this.startPoint.fromJSON(json.s);
    this.fillRule = json.r;
    if (this.gradientType === exports.GradientFillType.RADIAL) {
      this.highlightAngle.fromJSON(json.a);
      this.highlightLength.fromJSON(json.h);
    }
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      bm: this.blendMode,
      e: this.endPoint,
      g: this.gradientColors,
      t: this.gradientType,
      a: this.highlightAngle,
      h: this.highlightLength,
      o: this.opacity,
      r: this.fillRule,
      s: this.startPoint
    });
  }
}

class GroupShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.GROUP;
    this.blendMode = exports.BlendMode.NORMAL;
    this.isHidden = false;
    this.numProperties = 0;
    this.transform = new Transform();
    this.shapes = [];
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.blendMode = json.bm;
    this.contentPropertyIndex = json.cix;
    this.propertyIndex = json.ix;
    this.numProperties = json.np;
    this.shapes = json.it.map((jShape) => {
      try {
        if (jShape.ty !== "tr") {
          const nShape = this.createShape(jShape.ty);
          return nShape.fromJSON(jShape);
        } else {
          this.transform.fromJSON(jShape);
        }
      } catch (e) {
      }
      return false;
    }).filter(Boolean);
    return this;
  }
  createShape(type) {
    return createShapeFromType(type, this);
  }
  addShape(shape3) {
    if (!(shape3 instanceof Shape))
      shape3 = this.createShape(shape3);
    this.shapes.push(shape3);
    return shape3;
  }
  toJSON() {
    const json = super.toJSON();
    const shapes = JSON.parse(JSON.stringify(this.shapes));
    shapes.push({
      ty: "tr",
      nm: "Transform",
      ...this.transform.toJSON()
    });
    return Object.assign(json, {
      bm: this.blendMode,
      cix: this.contentPropertyIndex,
      it: shapes,
      ix: this.propertyIndex,
      np: this.numProperties
    });
  }
}

class PathShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.PATH;
    this.vertices = new Property(this, exports.PropertyType.SHAPE);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.itemIndex = json.ind;
    this.shapeIndex = json.ix;
    this.direction = json.d;
    this.vertices.fromJSON(json.ks);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      ind: this.itemIndex,
      ix: this.shapeIndex,
      d: this.direction,
      ks: this.vertices
    });
  }
}

class RectangleShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.RECTANGLE;
    this.position = new Property(this, exports.PropertyType.POSITION);
    this.roundness = new Property(this, exports.PropertyType.ROUNDNESS);
    this.size = new Property(this, exports.PropertyType.SIZE);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.direction = json.d;
    this.position.fromJSON(json.p);
    this.roundness.fromJSON(json.r);
    this.size.fromJSON(json.s);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      d: this.direction,
      p: this.position,
      r: this.roundness,
      s: this.size
    });
  }
}

class StrokeShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.STROKE;
    this.blendMode = exports.BlendMode.NORMAL;
    this.color = new Property(this, exports.PropertyType.COLOR);
    this.lineCapType = exports.LineCapType.ROUND;
    this.lineJoinType = exports.LineJoinType.ROUND;
    this.opacity = new Property(this, exports.PropertyType.OPACITY, [new KeyFrame(0, 100)]);
    this.width = new Property(this, exports.PropertyType.STROKE_WIDTH);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.blendMode = json.bm in exports.BlendMode ? json.bm : exports.BlendMode.NORMAL;
    this.color.fromJSON(json.c);
    this.lineCapType = json.lc in exports.LineCapType ? json.lc : exports.LineCapType.ROUND;
    this.lineJoinType = json.lj in exports.LineJoinType ? json.lj : exports.LineJoinType.ROUND;
    this.miterLimit = json.ml;
    this.opacity.fromJSON(json.o);
    this.width.fromJSON(json.w);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      bm: this.blendMode,
      c: this.color,
      lc: this.lineCapType,
      lj: this.lineJoinType,
      ml: this.miterLimit,
      o: this.opacity,
      w: this.width
    });
  }
}

class TrimShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.TRIM;
    this.blendMode = exports.BlendMode.NORMAL;
    this.trimEnd = new Property(this, exports.PropertyType.NUMBER);
    this.trimOffset = new Property(this, exports.PropertyType.NUMBER);
    this.trimStart = new Property(this, exports.PropertyType.NUMBER);
    this.trimMultipleShapes = exports.TrimMode.SIMULTANEOUSLY;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.blendMode = json.bm in exports.BlendMode ? json.bm : exports.BlendMode.NORMAL;
    this.trimEnd.fromJSON(json.e);
    this.trimOffset.fromJSON(json.o);
    this.trimStart.fromJSON(json.s);
    this.trimMultipleShapes = json.m in exports.TrimMode ? json.m : exports.TrimMode.INDIVIDUALLY;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      bm: this.blendMode,
      e: this.trimEnd,
      o: this.trimOffset,
      s: this.trimStart,
      m: this.trimMultipleShapes
    });
  }
}

class GradientStrokeShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.GRADIENT_STROKE;
    this.blendMode = exports.BlendMode.NORMAL;
    this.endPoint = new Property(this, exports.PropertyType.POSITION);
    this.gradientColors = new Gradient();
    this.gradientType = exports.GradientFillType.LINEAR;
    this.highlightAngle = new Property(this, exports.PropertyType.NUMBER);
    this.highlightLength = new Property(this, exports.PropertyType.NUMBER);
    this.opacity = new Property(this, exports.PropertyType.OPACITY);
    this.startPoint = new Property(this, exports.PropertyType.POSITION);
    this.lineCapType = exports.LineCapType.ROUND;
    this.lineJoinType = exports.LineJoinType.ROUND;
    this.width = new Property(this, exports.PropertyType.STROKE_WIDTH);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.blendMode = json.bm;
    this.opacity.fromJSON(json.o);
    this.endPoint.fromJSON(json.e);
    this.gradientColors.fromJSON(json.g);
    this.gradientType = json.t;
    this.startPoint.fromJSON(json.s);
    if (this.gradientType === exports.GradientFillType.RADIAL) {
      this.highlightAngle.fromJSON(json.a);
      this.highlightLength.fromJSON(json.h);
    }
    this.lineCapType = json.lc in exports.LineCapType ? json.lc : exports.LineCapType.ROUND;
    this.lineJoinType = json.lj in exports.LineJoinType ? json.lj : exports.LineJoinType.ROUND;
    this.miterLimit = json.ml;
    this.width.fromJSON(json.w);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      bm: this.blendMode,
      o: this.opacity,
      e: this.endPoint,
      g: this.gradientColors,
      t: this.gradientType,
      a: this.highlightAngle,
      h: this.highlightLength,
      s: this.startPoint,
      lc: this.lineCapType,
      lj: this.lineJoinType,
      ml: this.miterLimit,
      w: this.width
    });
  }
}

class RepeaterShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.REPEATER;
    this.anchor = new Property(this, exports.PropertyType.ANCHOR);
    this.startOpacity = new Property(this, exports.PropertyType.OPACITY);
    this.endOpacity = new Property(this, exports.PropertyType.OPACITY);
    this.position = new Property(this, exports.PropertyType.POSITION);
    this.rotation = new Property(this, exports.PropertyType.ROTATION);
    this.scale = new Property(this, exports.PropertyType.SCALE);
    this.shapes = [];
    this.skew = new Property(this, exports.PropertyType.SKEW);
    this.skewAxis = new Property(this, exports.PropertyType.SKEW_AXIS);
    this.copies = new Property(this, exports.PropertyType.NUMBER);
    this.offset = new Property(this, exports.PropertyType.NUMBER);
    this.composition = exports.RepeaterComposite.ABOVE;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.copies.fromJSON(json.c);
    this.composition = json.m;
    this.offset.fromJSON(json.o);
    this.anchor.fromJSON(json.tr.a);
    this.startOpacity.fromJSON(json.tr.so);
    this.endOpacity.fromJSON(json.tr.eo);
    this.position.fromJSON(json.tr.p);
    this.rotation.fromJSON(json.tr.r);
    this.scale.fromJSON(json.tr.s);
    if (json.tr.sk) {
      this.skew.fromJSON(json.tr.sk);
    }
    if (json.tr.sa) {
      this.skewAxis.fromJSON(json.tr.sa);
    }
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      m: this.composition,
      c: this.copies,
      o: this.offset,
      tr: {
        a: this.anchor,
        so: this.startOpacity,
        eo: this.endOpacity,
        p: this.position,
        r: this.rotation,
        s: this.scale,
        sk: this.skew,
        sa: this.skewAxis
      }
    });
  }
}

class StarShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.STAR;
    this.position = new Property(this, exports.PropertyType.POSITION);
    this.innerRadius = new Property(this, exports.PropertyType.NUMBER);
    this.innerRoundness = new Property(this, exports.PropertyType.NUMBER);
    this.outerRadius = new Property(this, exports.PropertyType.NUMBER);
    this.outerRoundness = new Property(this, exports.PropertyType.NUMBER);
    this.rotation = new Property(this, exports.PropertyType.ROTATION);
    this.points = new Property(this, exports.PropertyType.NUMBER);
    this.starType = exports.StarType.STAR;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.position.fromJSON(json.p);
    if (json.sy === 1) {
      this.innerRadius.fromJSON(json.ir);
      this.innerRoundness.fromJSON(json.is);
    }
    this.outerRadius.fromJSON(json.or);
    this.outerRoundness.fromJSON(json.os);
    this.rotation.fromJSON(json.r);
    this.points.fromJSON(json.pt);
    this.starType = json.sy;
    this.direction = json.d;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      p: this.position,
      ...this.starType === 1 && {ir: this.innerRadius},
      ...this.starType === 1 && {is: this.innerRoundness},
      or: this.outerRadius,
      os: this.outerRoundness,
      r: this.rotation,
      pt: this.points,
      sy: this.starType,
      d: this.direction
    });
  }
}

class RoundedCornersShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.ROUNDED_CORNERS;
    this.roundness = new Property(this, exports.PropertyType.NUMBER);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.roundness.fromJSON(json.r);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      r: this.roundness
    });
  }
}

class MergeShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.MERGE;
    this.mergeMode = 1;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.mergeMode = json.mm;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      mm: this.mergeMode
    });
  }
}

class OffsetPathShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.OFFSET_PATH;
    this.amount = new Property(this, exports.PropertyType.AMOUNT);
    this.lineJoin = exports.LineJoinType.MITER;
    this.miterLimit = new Property(this, exports.PropertyType.MITER_LIMIT);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.miterLimit.fromJSON(json.ml);
    this.amount.fromJSON(json.a);
    this.lineJoin = json.lj;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      ml: this.miterLimit,
      a: this.amount,
      lj: this.lineJoin
    });
  }
}

class PuckerBloatShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.PUCKER_BLOAT;
    this.amount = new Property(this, exports.PropertyType.AMOUNT);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.amount.fromJSON(json.a);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      a: this.amount
    });
  }
}

class TwistShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.TWIST;
    this.angle = new Property(this, exports.PropertyType.ANGLE);
    this.center = new Property(this, exports.PropertyType.CENTER);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.center.fromJSON(json.c);
    this.angle.fromJSON(json.a);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      c: this.center,
      a: this.angle
    });
  }
}

class ZigZagShape extends Shape {
  constructor() {
    super(...arguments);
    this.type = exports.ShapeType.ZIG_ZAG;
    this.radius = new Property(this, exports.PropertyType.RADIUS);
    this.distance = new Property(this, exports.PropertyType.DISTANCE);
    this.numberOfRidges = new Property(this, exports.PropertyType.POINTS);
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.radius.fromJSON(json.r);
    this.distance.fromJSON(json.s);
    this.numberOfRidges.fromJSON(json.pt);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      r: this.radius,
      s: this.distance,
      pt: this.numberOfRidges
    });
  }
}

const createShapeFromType = (type, parent) => {
  if (type === exports.ShapeType.PATH) {
    return new PathShape(parent);
  } else if (type === exports.ShapeType.GROUP) {
    return new GroupShape(parent);
  } else if (type === exports.ShapeType.FILL) {
    return new FillShape(parent);
  } else if (type === exports.ShapeType.RECTANGLE) {
    return new RectangleShape(parent);
  } else if (type === exports.ShapeType.ELLIPSE) {
    return new EllipseShape(parent);
  } else if (type === exports.ShapeType.STROKE) {
    return new StrokeShape(parent);
  } else if (type === exports.ShapeType.GRADIENT_FILL) {
    return new GradientFillShape(parent);
  } else if (type === exports.ShapeType.GRADIENT_STROKE) {
    return new GradientStrokeShape(parent);
  } else if (type === exports.ShapeType.TRIM) {
    return new TrimShape(parent);
  } else if (type === exports.ShapeType.MERGE) {
    return new MergeShape(parent);
  } else if (type === exports.ShapeType.STAR) {
    return new StarShape(parent);
  } else if (type === exports.ShapeType.ROUNDED_CORNERS) {
    return new RoundedCornersShape(parent);
  } else if (type === exports.ShapeType.REPEATER) {
    return new RepeaterShape(parent);
  } else if (type === exports.ShapeType.PUCKER_BLOAT) {
    return new PuckerBloatShape(parent);
  } else if (type === exports.ShapeType.OFFSET_PATH) {
    return new OffsetPathShape(parent);
  } else if (type === exports.ShapeType.TWIST) {
    return new TwistShape(parent);
  } else if (type === exports.ShapeType.ZIG_ZAG) {
    return new ZigZagShape(parent);
  }
  throw new Error(`Invalid or unknown shape type: ${type}`);
};

class Character {
  constructor() {
    this.character = "";
    this.fontSize = 0;
    this.fontStyle = "";
    this.fontWeight = 0;
    this.data = [];
    this.fontFamily = "";
  }
  createShape(type) {
    return createShapeFromType(type, this);
  }
  createShapeFromJSON(json) {
    try {
      const shape2 = this.createShape(json.ty);
      return shape2.fromJSON(json);
    } catch (e) {
      throw new Error(`Unable to create shape from JSON: ${json.ty}`);
    }
  }
  fromJSON(json) {
    this.character = json.ch;
    this.fontSize = json.size;
    this.fontStyle = json.style;
    this.fontWeight = json.w;
    this.fontFamily = json.fFamily;
    if ("data" in json && json.data.shapes) {
      this.data = json.data.shapes.map((shapeJSON) => this.createShapeFromJSON(shapeJSON));
    }
    return this;
  }
  toJSON() {
    const shapes2 = this.data.map((shape2) => shape2.toJSON());
    return {
      ch: this.character,
      size: this.fontSize,
      style: this.fontStyle,
      w: this.fontWeight,
      data: {shapes: shapes2.length ? shapes2 : void 0},
      fFamily: this.fontFamily
    };
  }
}

class Font {
  constructor() {
    this.fName = "";
    this.fFamily = "";
    this.fStyle = "";
    this.ascent = 0;
    this.fPath = "";
    this.fWeight = "";
    this.origin = -1;
    this.fClass = "";
  }
  fromJSON(json) {
    this.fName = json.fName;
    this.fFamily = json.fFamily;
    this.fStyle = json.fStyle;
    this.ascent = json.ascent;
    this.fPath = json.fPath;
    this.fWeight = json.fWeight;
    this.origin = json.origin;
    this.fClass = json.fClass;
    return this;
  }
  toJSON() {
    return {
      fName: this.fName,
      fFamily: this.fFamily,
      fStyle: this.fStyle,
      ascent: this.ascent,
      ...!(this.fPath === "") && {fPath: this.fPath},
      ...!(this.fWeight === "") && {fWeight: this.fWeight},
      ...!(this.origin >= 0) && {origin: this.origin},
      ...!(this.fClass === "") && {fClass: this.fClass}
    };
  }
}

class FontList {
  constructor() {
    this.list = [];
  }
  fromJSON(json) {
    this.list = json.list.map((fontJSON) => new Font().fromJSON(fontJSON));
    return this;
  }
  toJSON() {
    return {
      list: this.list
    };
  }
}

class EffectValue {
  constructor(type) {
    this.name = "";
    this.index = 0;
    this.type = type;
  }
  fromJSON(json) {
    this.name = json.nm;
    this.matchName = json.mn;
    this.index = json.ix;
    if (typeof json.v === "object") {
      this.value = new Property(this, exports.PropertyType.EFFECT_VALUE).fromJSON(json.v);
    } else if (typeof json.v === "number") {
      this.value = json.v;
    }
    return this;
  }
  toJSON() {
    return {
      ty: this.type,
      nm: this.name,
      mn: this.matchName,
      ix: this.index,
      v: this.value
    };
  }
}

class Effect {
  constructor(type = exports.EffectType.NONE) {
    this.name = "";
    this.index = 0;
    this.enabled = true;
    this.values = [];
    this.type = type;
  }
  fromJSON(json) {
    var _a;
    this.type = json.ty;
    this.name = json.nm;
    this.matchName = json.mn;
    this.numberOfProperties = json.np;
    this.index = json.ix;
    this.enabled = (_a = json.en) != null ? _a : true;
    this.values = json.ef.map((valueJSON) => new EffectValue(valueJSON.ty).fromJSON(valueJSON));
    return this;
  }
  toJSON() {
    const values = this.values.map((value) => value.toJSON());
    return {
      ty: this.type,
      nm: this.name,
      np: this.numberOfProperties,
      mn: this.matchName,
      ix: this.index,
      ef: values,
      en: this.enabled ? 1 : this.enabled
    };
  }
}

class Mask {
  constructor() {
    this.isInverted = false;
    this.name = "";
    this.opacity = new Property(this, exports.PropertyType.OPACITY);
    this.points = new Property(this, exports.PropertyType.POINTS);
    this.mode = exports.MaskMode.Add;
    this.expansion = new Property(this, exports.PropertyType.EXPANSION);
  }
  fromJSON(json) {
    this.isInverted = Boolean(json.inv);
    this.mode = json.mode;
    this.name = json.nm;
    this.points.fromJSON(json.pt);
    this.opacity.fromJSON(json.o);
    this.expansion.fromJSON(json.x);
    return this;
  }
  toJSON() {
    return {
      inv: this.isInverted,
      mode: this.mode,
      nm: this.name,
      o: this.opacity,
      pt: this.points,
      x: this.expansion
    };
  }
}

class Layer {
  constructor(parent) {
    this.autoOrient = false;
    this.blendMode = exports.BlendMode.NORMAL;
    this.classNames = [];
    this.id = "";
    this.inPoint = 0;
    this.is3D = false;
    this.name = "";
    this.outPoint = 0;
    this.startTime = 0;
    this.timeStretch = 1;
    this.masks = [];
    this.effects = [];
    this.transform = new Transform();
    this.parent = parent;
  }
  get colors() {
    const colors = new Set();
    const registry = useRegistry();
    [...registry.keys()].filter((p) => registry.get(p) === this && p.type === exports.PropertyType.COLOR).forEach((cp) => {
      cp.values.forEach((v) => {
        colors.add(JSON.stringify(v.value));
      });
    });
    return Array.from(colors).map((c) => JSON.parse(c));
  }
  get hasMask() {
    return this.masks.length > 0;
  }
  get totalFrames() {
    return this.outPoint - this.inPoint;
  }
  fromJSON(json) {
    this.autoOrient = json.ao === 1;
    this.blendMode = json.bm;
    this.id = json.ln;
    this.index = json.ind;
    this.inPoint = json.ip;
    this.is3D = json.ddd;
    this.name = json.nm;
    this.outPoint = json.op;
    this.parent = json.parent;
    this.startTime = json.st;
    this.timeStretch = json.sr;
    this.classNames = "cl" in json ? json.cl.split(" ") : [];
    this.transform.fromJSON(json.ks);
    if ("tt" in json) {
      this.matteMode = json.tt;
    }
    if ("td" in json) {
      this.matteTarget = json.td;
    }
    if ("hd" in json) {
      this.isHidden = json.hd;
    }
    if ("mn" in json) {
      this.matchName = json.mn;
    }
    if ("masksProperties" in json) {
      this.masks = json.masksProperties.map((maskJson) => new Mask().fromJSON(maskJson));
    }
    if ("ef" in json) {
      this.effects = json.ef.map((effectJson) => new Effect().fromJSON(effectJson));
    }
    return this;
  }
  toJSON() {
    var _a;
    const masks2 = this.hasMask ? this.masks.map((mask) => mask.toJSON()) : void 0;
    const effects2 = this.effects.length ? this.effects.map((effect) => effect.toJSON()) : void 0;
    return {
      ddd: this.is3D ? 1 : 0,
      ind: this.index,
      ty: this.type,
      nm: this.name,
      mn: this.matchName,
      tt: this.matteMode,
      td: this.matteTarget,
      cl: this.classNames.length ? this.classNames.join(" ") : void 0,
      ln: this.id,
      parent: (_a = this.parent) == null ? void 0 : _a.index,
      hd: this.isHidden !== void 0 ? Number(this.isHidden) : void 0,
      sr: this.timeStretch,
      ks: this.transform.toJSON(),
      ao: this.autoOrient ? 1 : 0,
      hasMask: this.hasMask || void 0,
      masksProperties: masks2,
      ef: effects2,
      ip: this.inPoint,
      op: this.outPoint,
      st: this.startTime,
      bm: this.blendMode
    };
  }
}

class GroupLayer extends Layer {
  constructor() {
    super(...arguments);
    this.type = exports.LayerType.GROUP;
  }
  fromJSON(json) {
    super.fromJSON(json);
    return this;
  }
}

class ImageLayer extends Layer {
  constructor() {
    super(...arguments);
    this.type = exports.LayerType.IMAGE;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.refId = json.refId;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      refId: this.refId
    });
  }
}

class PrecompositionLayer extends Layer {
  constructor() {
    super(...arguments);
    this.type = exports.LayerType.PRECOMPOSITION;
    this.height = 512;
    this.width = 512;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.height = json.h;
    this.refId = json.refId;
    this.width = json.w;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      h: this.height,
      refId: this.refId,
      w: this.width
    });
  }
}

class ShapeLayer extends Layer {
  constructor() {
    super(...arguments);
    this.type = exports.LayerType.SHAPE;
    this.shapes = [];
  }
  createShape(type) {
    return createShapeFromType(type, this);
  }
  addShape(shape2) {
    if (!(shape2 instanceof Shape))
      shape2 = this.createShape(shape2);
    this.shapes.push(shape2);
    return shape2;
  }
  createShapeFromJSON(json) {
    try {
      const shape2 = this.createShape(json.ty);
      return shape2.fromJSON(json);
    } catch (e) {
      throw new Error(`Unable to create shape from JSON: ${json.ty}`);
    }
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.shapes = json.shapes.map((jShape) => this.createShapeFromJSON(jShape)).filter(Boolean);
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      shapes: this.shapes.map((shape2) => shape2.toJSON())
    });
  }
}

class SolidLayer extends Layer {
  constructor() {
    super(...arguments);
    this.type = exports.LayerType.SOLID;
    this.solidColor = "#000000";
    this.solidHeight = 1;
    this.solidWidth = 1;
  }
  fromJSON(json) {
    super.fromJSON(json);
    this.solidColor = json.sc;
    this.solidHeight = json.sh;
    this.solidWidth = json.sw;
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      sc: this.solidColor,
      sh: this.solidHeight,
      sw: this.solidWidth
    });
  }
}

class TextSelector {
  constructor() {
    this.startTime = 0;
    this.randomize = false;
    this.textShape = exports.TextShape.SQUARE;
    this.basedOn = exports.TextBased.CHARACTERS;
    this.maxEase = new Property(this, exports.PropertyType.MAX_EASE);
    this.minEase = new Property(this, exports.PropertyType.MIN_EASE);
    this.maxAmount = new Property(this, exports.PropertyType.MAX_AMOUNT);
  }
  fromJSON(json) {
    this.startTime = json.t;
    this.randomize = json.r === 1;
    this.rangeUnits = json.rn;
    this.textShape = json.sh;
    this.basedOn = json.b;
    if ("a" in json) {
      this.maxAmount.fromJSON(json.a);
    }
    if ("e" in json) {
      this.end = new Property(this, exports.PropertyType.END).fromJSON(json.e);
    }
    if ("xe" in json) {
      this.maxEase = new Property(this, exports.PropertyType.MAX_EASE).fromJSON(json.xe);
    }
    if ("ne" in json) {
      this.minEase = new Property(this, exports.PropertyType.MIN_EASE).fromJSON(json.ne);
    }
    if ("o" in json) {
      this.offset = new Property(this, exports.PropertyType.OFFSET).fromJSON(json.o);
    }
    if ("sm" in json) {
      this.expressionSelector = new Property(this, exports.PropertyType.EXPRESSION_SELECTOR).fromJSON(json.sm);
    }
    if ("s" in json) {
      this.start = new Property(this, exports.PropertyType.START).fromJSON(json.s);
    }
    return this;
  }
  toJSON() {
    return {
      t: this.startTime,
      xe: this.maxEase,
      ne: this.minEase,
      a: this.maxAmount,
      b: this.basedOn,
      rn: this.rangeUnits,
      sh: this.textShape,
      o: this.offset,
      r: this.randomize ? 1 : 0,
      sm: this.expressionSelector,
      s: this.start,
      e: this.end
    };
  }
}

class TextTransform {
  fromJSON(json) {
    if ("a" in json) {
      this.anchor = new Property(this, exports.PropertyType.ANCHOR).fromJSON(json.a);
    }
    if ("p" in json) {
      this.position = new Property(this, exports.PropertyType.POSITION).fromJSON(json.p);
    }
    if ("s" in json) {
      this.scale = new Property(this, exports.PropertyType.SCALE).fromJSON(json.s);
    }
    if ("r" in json) {
      this.rotation = new Property(this, exports.PropertyType.ROTATION).fromJSON(json.r);
    }
    if ("sk" in json) {
      this.skew = new Property(this, exports.PropertyType.SKEW).fromJSON(json.sk);
    }
    if ("sa" in json) {
      this.skewAxis = new Property(this, exports.PropertyType.SKEW_AXIS).fromJSON(json.sa);
    }
    if ("o" in json) {
      this.opacity = new Property(this, exports.PropertyType.OPACITY).fromJSON(json.o);
    }
    if ("rx" in json) {
      this.rotationX = new Property(this, exports.PropertyType.ROTATION_X).fromJSON(json.rx);
    }
    if ("ry" in json) {
      this.rotationY = new Property(this, exports.PropertyType.ROTATION_Y).fromJSON(json.ry);
    }
    if ("sw" in json) {
      this.strokeWidth = new Property(this, exports.PropertyType.STROKE_WIDTH).fromJSON(json.sw);
    }
    if ("sc" in json) {
      this.strokeColor = new Property(this, exports.PropertyType.COLOR).fromJSON(json.sc);
    }
    if ("fc" in json) {
      this.fillColor = new Property(this, exports.PropertyType.COLOR).fromJSON(json.fc);
    }
    if ("fs" in json) {
      this.fillSaturation = new Property(this, exports.PropertyType.SATURATION).fromJSON(json.fs);
    }
    if ("fh" in json) {
      this.fillHue = new Property(this, exports.PropertyType.HUE).fromJSON(json.fh);
    }
    if ("fb" in json) {
      this.fillBrightness = new Property(this, exports.PropertyType.BRIGHTNESS).fromJSON(json.fb);
    }
    if ("t" in json) {
      this.tracking = new Property(this, exports.PropertyType.TEXT_TRACKING).fromJSON(json.t);
    }
    return this;
  }
  toJSON() {
    return {
      a: this.anchor,
      o: this.opacity,
      p: this.position,
      r: this.rotation,
      s: this.scale,
      sk: this.skew,
      sa: this.skewAxis,
      rx: this.rotationX,
      ry: this.rotationY,
      sw: this.strokeWidth,
      sc: this.strokeColor,
      fc: this.fillColor,
      fs: this.fillSaturation,
      fh: this.fillHue,
      fb: this.fillBrightness,
      t: this.tracking
    };
  }
}

class TextAnimator {
  constructor() {
    this.name = "";
    this.transform = new TextTransform();
    this.selector = new TextSelector();
  }
  fromJSON(json) {
    this.transform.fromJSON(json.a);
    this.selector.fromJSON(json.s);
    this.name = json.nm;
    return this;
  }
  toJSON() {
    return {
      nm: this.name,
      s: this.selector,
      a: this.transform
    };
  }
}

class TextOptions {
  constructor() {
    this.alignment = new Property(this, exports.PropertyType.TEXT_ALIGNMENT);
    this.grouping = exports.TextGrouping.CHARACTERS;
  }
  fromJSON(json) {
    this.alignment.fromJSON(json.a);
    this.grouping = json.g;
    return this;
  }
  toJSON() {
    return {
      a: this.alignment,
      g: this.grouping
    };
  }
}

class TextData {
  constructor() {
    this.textDocument = new Property(this, exports.PropertyType.TEXT_DATA);
    this.textOptions = new TextOptions();
    this.textAnimators = [];
  }
  fromJSON(json) {
    this.textDocument.fromJSON(json.d);
    this.textOptions.fromJSON(json.m);
    this.maskedPath = json.p;
    if ("a" in json && Array.isArray(json.a)) {
      this.textAnimators = json.a.map((animatorJson) => this.createTextAnimator(animatorJson));
    }
    return this;
  }
  createTextAnimator(json) {
    return new TextAnimator().fromJSON(json);
  }
  toJSON() {
    return {
      a: this.textAnimators.map((animator) => animator.toJSON()),
      d: this.textDocument,
      m: this.textOptions,
      p: this.maskedPath
    };
  }
}

class TextLayer extends Layer {
  constructor() {
    super(...arguments);
    this.type = exports.LayerType.TEXT;
  }
  fromJSON(json) {
    super.fromJSON(json);
    if ("t" in json) {
      this.textData = new TextData();
      this.textData.fromJSON(json.t);
    }
    return this;
  }
  toJSON() {
    const json = super.toJSON();
    return Object.assign(json, {
      t: this.textData
    });
  }
}

class Marker {
  constructor() {
    this.comment = "";
    this.duration = 0;
    this.time = 0;
  }
  fromJSON(json) {
    this.comment = json.cm;
    this.duration = json.dr;
    this.time = json.tm;
    return this;
  }
  toJSON() {
    return {
      cm: this.comment,
      dr: this.duration,
      tm: this.time
    };
  }
}

function rgbaToHex(rgba) {
  let r = (+rgba[0]).toString(16), g = (+rgba[1]).toString(16), b = (+rgba[2]).toString(16), a = Math.round(+rgba[3] * 255).toString(16);
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  if (a.length == 1)
    a = "0" + a;
  return "#" + r + g + b + a;
}
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return [r / 255, g / 255, b / 255, alpha];
  }
  return [r / 255, g / 255, b / 255];
}
function websafeColors(colors) {
  colors.forEach((color2) => {
    color2.websafeColors();
  });
  return colors;
}

class Meta {
  constructor(parent) {
    this.keywords = [];
    this.generator = "@lottiefiles/lottie-js 0.4.2";
    this.parent = parent;
  }
  fromJSON(json) {
    this.author = json.a;
    this.keywords = "k" in json ? json.k.split(",").map((w) => w.trim()) : [json.k];
    this.generator = json.g;
    this.description = json.d;
    this.themeColor = json.tc;
    return this;
  }
  toJSON() {
    return {
      a: this.author,
      k: this.keywords.length ? this.keywords : void 0,
      g: this.generator,
      d: this.description,
      tc: this.themeColor
    };
  }
}

class Animation {
  constructor() {
    this.assets = [];
    this.frameRate = 60;
    this.height = 0;
    this.inPoint = 0;
    this.is3D = false;
    this.layers = [];
    this.markers = [];
    this.meta = new Meta(this);
    this.name = "";
    this.outPoint = 0;
    this.version = ``;
    this.width = 0;
    this.fonts = new FontList();
    this.characters = [];
  }
  static async fromURL(url) {
    if (typeof url !== "string") {
      throw new Error(`The url value must be a string`);
    }
    let json;
    try {
      const srcUrl = new URL(url);
      const result = await fetch__default['default'](srcUrl.toString());
      json = await result.json();
    } catch (err) {
      throw new Error(`An error occurred while trying to load the Lottie file from URL`);
    }
    const anim = new Animation();
    return anim.fromJSON(json);
  }
  static isLottie(json) {
    const mandatory = ["v", "ip", "op", "layers", "fr", "w", "h"];
    return mandatory.every((field) => Object.prototype.hasOwnProperty.call(json, field));
  }
  get colors() {
    const colors = new Set();
    [...useRegistry().keys()].filter((p) => p.type === exports.PropertyType.COLOR).forEach((cp) => {
      cp.values.forEach((v) => {
        colors.add(JSON.stringify(v.value));
      });
    });
    return Array.from(colors).map((c) => Color.fromJSON(JSON.parse(c)));
  }
  get colorsVerbose() {
    const colors = {};
    [...useRegistry().keys()].filter((p) => p.type === exports.PropertyType.COLOR).forEach((cp, index) => {
      const parent = cp.getParent();
      const pathString = this.parentPath(parent);
      const pathCopy = pathString.slice();
      cp.values.forEach((v) => {
        pathCopy.unshift("Frame " + v.frame);
        pathCopy.unshift(index.toString());
        const colorParts = v.value;
        colors[pathCopy.join(".")] = rgbaToHex([
          Math.round(colorParts[0] * 255),
          Math.round(colorParts[1] * 255),
          Math.round(colorParts[2] * 255),
          colorParts[3]
        ]);
      });
    });
    return colors;
  }
  get textLayers() {
    const textLayers = {};
    const layers2 = this.getLayersByType(exports.LayerType.TEXT);
    layers2.forEach((layer, index) => {
      var _a;
      const textDocument = (_a = layer.textData) == null ? void 0 : _a.textDocument.values[0];
      let layerText = "";
      if (textDocument !== void 0) {
        layerText = textDocument.value.text;
      }
      textLayers[index + "." + layer.name] = layerText;
    });
    return textLayers;
  }
  parentPath(shape2, paths = []) {
    if (shape2.parent === void 0) {
      paths.push(shape2.name);
      return paths;
    }
    paths.push(shape2.name);
    return this.parentPath(shape2.parent, paths);
  }
  get duration() {
    return this.totalFrames / this.frameRate;
  }
  get fileSize() {
    return new TextEncoder().encode(JSON.stringify(this)).length;
  }
  get totalFrames() {
    return this.outPoint - this.inPoint;
  }
  createAsset(type) {
    if (type === exports.AssetType.PRECOMPOSITION) {
      return new PrecompositionAsset(this);
    } else if (type === exports.AssetType.IMAGE) {
      return new ImageAsset(this);
    }
    throw new Error(`Invalid or unknown asset type ${type}`);
  }
  createAssetFromJSON(json) {
    try {
      const asset = this.createAsset("layers" in json ? exports.AssetType.PRECOMPOSITION : exports.AssetType.IMAGE);
      return asset.fromJSON(json);
    } catch (e) {
      throw new Error(`Unable to create asset from JSON`);
    }
  }
  createLayer(type) {
    if (type === exports.LayerType.PRECOMPOSITION) {
      return new PrecompositionLayer(this);
    } else if (type === exports.LayerType.SHAPE) {
      return new ShapeLayer(this);
    } else if (type === exports.LayerType.GROUP) {
      return new GroupLayer(this);
    } else if (type === exports.LayerType.SOLID) {
      return new SolidLayer(this);
    } else if (type === exports.LayerType.IMAGE) {
      return new ImageLayer(this);
    } else if (type === exports.LayerType.TEXT) {
      return new TextLayer(this);
    }
    throw new Error(`Invalid or unknown layer type: ${type}`);
  }
  createLayerFromJSON(json) {
    try {
      const layer = this.createLayer(json.ty);
      return layer.fromJSON(json);
    } catch (e) {
      console.log(e);
      throw new Error(`Unable to create layer type from JSON: ${json.ty}`);
    }
  }
  createLayersFromJSONArray(jsonLayers) {
    const layerRegistry = new Map();
    const layerToParent = [];
    const layers2 = [];
    jsonLayers.forEach((jLayer) => {
      const layer = this.createLayerFromJSON(jLayer);
      if (layer) {
        if (jLayer.parent !== void 0) {
          layerToParent.push([layer, jLayer.parent]);
        }
        if (layer.index !== void 0) {
          layerRegistry.set(layer.index, layer);
        }
        layers2.push(layer);
      }
    });
    layerToParent.forEach(([layer, parentId]) => {
      layer.parent = layerRegistry.get(parentId);
    });
    return layers2;
  }
  createMarker() {
    return new Marker();
  }
  createMarkerFromJSON(json) {
    try {
      const marker = this.createMarker();
      return marker.fromJSON(json);
    } catch (e) {
      console.log(e);
      throw new Error(`Unable to create marker from JSON`);
    }
  }
  fromJSON(json) {
    if (Animation.isLottie(json) === false) {
      throw new Error(`The given object is not a valid Lottie JSON structure`);
    }
    this.frameRate = json.fr;
    this.height = json.h;
    this.inPoint = json.ip;
    this.is3D = json.ddd;
    this.name = json.nm;
    this.outPoint = json.op;
    this.version = json.v;
    this.width = json.w;
    if ("assets" in json) {
      this.assets = json.assets.map((jAsset) => this.createAssetFromJSON(jAsset)).filter(Boolean);
    }
    this.layers = this.createLayersFromJSONArray(json.layers);
    if ("markers" in json) {
      this.markers = json.markers.map((jMarker) => this.createMarkerFromJSON(jMarker)).filter(Boolean);
    }
    if ("meta" in json) {
      this.meta.fromJSON(json.meta);
    }
    if ("fonts" in json) {
      this.fonts.fromJSON(json.fonts);
    }
    if ("chars" in json) {
      this.characters = json.chars.map((charJSON) => new Character().fromJSON(charJSON));
    }
    return this;
  }
  getLayerById(id) {
    if (typeof id !== "string") {
      throw new Error(`ID value must be a string`);
    }
    return this.layers.find((layer) => layer.id === id);
  }
  getShapeById(id) {
    let queried_shape = null;
    if (typeof id !== "string") {
      throw new Error(`ID value must be a string`);
    }
    this.layers.forEach((layer) => {
      if (layer instanceof ShapeLayer) {
        layer.shapes.forEach((shape2) => {
          if (shape2.id === id) {
            queried_shape = shape2;
            return;
          }
        });
      }
    });
    return queried_shape;
  }
  getShapesByClassName(className) {
    const shapes = [];
    if (typeof className !== "string") {
      throw new Error(`ID value must be a string`);
    }
    this.layers.forEach((layer) => {
      if (layer instanceof ShapeLayer) {
        layer.shapes.forEach((shape2) => {
          var _a;
          if ((_a = shape2.classNames) == null ? void 0 : _a.includes(className)) {
            shapes.push(shape2);
          }
          if (shape2 instanceof GroupShape) {
            const groupedShapes = shape2.shapes;
            groupedShapes.forEach((groupedShape) => {
              var _a2;
              if ((_a2 = groupedShape.classNames) == null ? void 0 : _a2.includes(className)) {
                shapes.push(shape2);
              }
            });
          }
        });
      }
    });
    return shapes;
  }
  getLayersByClassName(className) {
    if (typeof className !== "string") {
      throw new Error(`Class name value must be a string`);
    }
    return this.layers.filter((layer) => layer.classNames.includes(className));
  }
  getLayersByType(type) {
    if (type in exports.LayerType === false) {
      throw new Error(`Type value must be a valid LayerType value`);
    }
    return this.layers.filter((layer) => layer.type === type);
  }
  toJSON(key) {
    if (key) {
      return void 0;
    }
    const chars = this.characters.map((char) => char.toJSON());
    return {
      ...this.assets.length > 0 && {assets: this.assets},
      ddd: this.is3D ? 1 : 0,
      fr: this.frameRate,
      h: this.height,
      ip: this.inPoint,
      layers: this.layers.map((layer) => layer.toJSON()),
      ...this.markers.length > 0 && {markers: this.markers.map((marker) => marker.toJSON())},
      meta: this.meta,
      nm: this.name,
      op: this.outPoint,
      v: this.version || "5.6.0",
      w: this.width,
      ...this.fonts.list.length > 0 && {fonts: this.fonts.toJSON()},
      chars: chars.length > 0 ? chars : void 0
    };
  }
}

exports.Animation = Animation;
exports.Asset = Asset;
exports.Character = Character;
exports.Color = Color;
exports.ColorRgb = ColorRgb;
exports.ColorRgba = ColorRgba;
exports.Effect = Effect;
exports.EffectValue = EffectValue;
exports.EllipseShape = EllipseShape;
exports.FillShape = FillShape;
exports.Font = Font;
exports.FontList = FontList;
exports.Gradient = Gradient;
exports.GradientFillShape = GradientFillShape;
exports.GradientStop = GradientStop;
exports.GradientStrokeShape = GradientStrokeShape;
exports.GroupLayer = GroupLayer;
exports.GroupShape = GroupShape;
exports.ImageAsset = ImageAsset;
exports.ImageLayer = ImageLayer;
exports.KeyFrame = KeyFrame;
exports.Layer = Layer;
exports.Marker = Marker;
exports.Mask = Mask;
exports.MergeShape = MergeShape;
exports.Meta = Meta;
exports.OffsetPathShape = OffsetPathShape;
exports.PathShape = PathShape;
exports.PrecompositionAsset = PrecompositionAsset;
exports.PrecompositionLayer = PrecompositionLayer;
exports.Property = Property;
exports.PuckerBloatShape = PuckerBloatShape;
exports.RectangleShape = RectangleShape;
exports.RepeaterShape = RepeaterShape;
exports.RoundedCornersShape = RoundedCornersShape;
exports.Shape = Shape;
exports.ShapeLayer = ShapeLayer;
exports.SolidLayer = SolidLayer;
exports.StarShape = StarShape;
exports.StrokeShape = StrokeShape;
exports.TextAnimator = TextAnimator;
exports.TextData = TextData;
exports.TextDocument = TextDocument;
exports.TextLayer = TextLayer;
exports.TextOptions = TextOptions;
exports.TextSelector = TextSelector;
exports.TextTransform = TextTransform;
exports.Transform = Transform;
exports.TrimShape = TrimShape;
exports.TwistShape = TwistShape;
exports.ZigZagShape = ZigZagShape;
exports.hexToRgba = hexToRgba;
exports.rgbaToHex = rgbaToHex;
exports.useRegistry = useRegistry;
exports.websafeColors = websafeColors;
//# sourceMappingURL=index.cjs.js.map
