/* eslint-disable no-bitwise */

// The operands of all bitwise operators are converted to signed 32-bit integers
// in two's complement format.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
const MAX_BIT_WIDTH = 32;
const MIN_BIT_WIDTH = 0;

const bitwiseRotation = bitWidth => {
  if (typeof bitWidth !== 'number') {
    throw new Error('Bit width must be a number');
  }

  if (bitWidth > MAX_BIT_WIDTH) {
    throw new Error(`Bit width too large; must be less than ${MAX_BIT_WIDTH}.`);
  }

  if (bitWidth < MIN_BIT_WIDTH) {
    throw new Error(`Bit width too small; must be greater than ${MIN_BIT_WIDTH}.`);
  }

  const bitMask = (2 ** bitWidth) - 1;
  const maskedRotation = (rotation) => rotation & (bitWidth - 1);

  return {
    ror: (byte, r) => {
      const rotation = maskedRotation(r);
      return (
        (byte >>> rotation) |
        ((byte << (bitWidth - rotation)) & bitMask)
      );
    },
    rol: (byte, r) => {
      const rotation = maskedRotation(r);
      return (
        ((byte << rotation) & bitMask) |
        (byte >>> (bitWidth - rotation))
      );
    },
  };
};

const { ror: rorInt8, rol: rolInt8 } = bitwiseRotation(MAX_BIT_WIDTH / 4);
const { ror: rorInt16, rol: rolInt16 } = bitwiseRotation(MAX_BIT_WIDTH / 2);
const { ror: rorInt32, rol: rolInt32 } = bitwiseRotation(MAX_BIT_WIDTH);

export default bitwiseRotation;
export {
  rorInt8,
  rolInt8,
  rorInt16,
  rolInt16,
  rorInt32,
  rolInt32,
};
