# bitwise-rotation

> In computer programming, a circular shift (or **bitwise rotation**) is a shift
> operator that shifts all bits of its operand. Unlike an arithmetic shift, a
> circular shift does not preserve a number's sign bit or distinguish a number's
> exponent from its significand (sometimes referred to as the mantissa).
> &mdash; [Wikipedia][1]

# How to Use

```js
import bitwiseRotation from 'bitwise-rotation';

// Set the bit-width/length; max of `32`, min of `0`.
const int8BitwiseRotation = bitwiseRotation(8);

// Returns an object with rotate right (`ror`) and rotate left (`rol`) methods.
const { ror, rol } = int8BitwiseRotation;

// Rotate a byte by an amount.
rol(101, 2); // 149
ror(101, 2); // 89
```

## Visual Example

```js
import bitwiseRotation from 'bitwise-rotation';

const bitsInAByte = 8;

const { ror, rol } = bitwiseRotation(bitsInAByte);

const byte = 1;
byte.toString(2);         // 00000001
rol(byte, 1).toString(2); // 00000010
rol(byte, 2).toString(2); // 00000100
rol(byte, 3).toString(2); // 00001000
rol(byte, 4).toString(2); // 00010000
ror(byte, 4).toString(2); // 00010000
ror(byte, 3).toString(2); // 00100000
ror(byte, 2).toString(2); // 01000000
ror(byte, 1).toString(2); // 10000000
```

[1]: https://en.wikipedia.org/wiki/Circular_shift
