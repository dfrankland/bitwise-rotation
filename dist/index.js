var BitwiseRotation = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default,
    rolInt16: () => rolInt16,
    rolInt32: () => rolInt32,
    rolInt8: () => rolInt8,
    rorInt16: () => rorInt16,
    rorInt32: () => rorInt32,
    rorInt8: () => rorInt8
  });
  var MAX_BIT_WIDTH = 32;
  var MIN_BIT_WIDTH = 0;
  var bitwiseRotation = (bitWidth) => {
    if (typeof bitWidth !== "number") {
      throw new Error("Bit width must be a number");
    }
    if (bitWidth > MAX_BIT_WIDTH) {
      throw new Error(`Bit width too large; must be less than ${MAX_BIT_WIDTH}.`);
    }
    if (bitWidth < MIN_BIT_WIDTH) {
      throw new Error(`Bit width too small; must be greater than ${MIN_BIT_WIDTH}.`);
    }
    const bitMask = 2 ** bitWidth - 1;
    const maskedRotation = (rotation) => rotation & bitWidth - 1;
    return {
      ror: (value, r) => {
        const rotation = maskedRotation(r);
        return value >>> rotation | value << bitWidth - rotation & bitMask;
      },
      rol: (value, r) => {
        const rotation = maskedRotation(r);
        return value << rotation & bitMask | value >>> bitWidth - rotation;
      }
    };
  };
  var { ror: rorInt8, rol: rolInt8 } = bitwiseRotation(MAX_BIT_WIDTH / 4);
  var { ror: rorInt16, rol: rolInt16 } = bitwiseRotation(MAX_BIT_WIDTH / 2);
  var { ror: rorInt32, rol: rolInt32 } = bitwiseRotation(MAX_BIT_WIDTH);
  var src_default = bitwiseRotation;
  return __toCommonJS(src_exports);
})();
