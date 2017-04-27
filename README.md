# bitwise-rotation

Rotate values with a bitwise rotation.

> In computer programming, a circular shift (or **bitwise rotation**) is a shift
> operator that shifts all bits of its operand. Unlike an arithmetic shift, a
> circular shift does not preserve a number's sign bit or distinguish a number's
> exponent from its significand (sometimes referred to as the mantissa).
> &mdash; [Wikipedia][1]

# How to Use

```js
import bitwiseRotation from 'bitwise-rotation';

// Set the bit-width/length; max of `32`, min of `0`.
const rotationObject = bitwiseRotation(8);

// Returns an object with rotate right (`ror`) and rotate left (`rol`) methods.
const { ror, rol } = rotationObject;

// Rotate a value by an amount.
rol(101, 2); // 149
ror(101, 2); // 89
```

## Visual Example

```js
import { rolInt8, rorInt8 } from 'bitwise-rotation';

const value = 1;
value.toString(2);             // 00000001
rolInt8(value, 1).toString(2); // 00000010
rolInt8(value, 2).toString(2); // 00000100
rolInt8(value, 3).toString(2); // 00001000
rolInt8(value, 4).toString(2); // 00010000
rorInt8(value, 4).toString(2); // 00010000
rorInt8(value, 3).toString(2); // 00100000
rorInt8(value, 2).toString(2); // 01000000
rorInt8(value, 1).toString(2); // 10000000
```

## API

### `bitwiseRotation(bitWidth)` (`default`)

A function to specify a custom `bitWidth` that returns a `rotationObject`.

*   `bitWidth`: An integer between \[0, 32\] that specifies the limit for
    rotating values.

> `bitWidth` cannot be larger than 32 because operands of all bitwise operators
> are converted to signed 32-bit integers in two's complement format.
> &mdash; [MDN][2]

#### `rotationObject`

An object with the following 2 methods for rotating bytes:

*   `ror(value, rotation)`: Rotate a byte to the right by the specified amount of
    rotation.

    *   `value`: Decimal representation of a value to be rotated.

    *   `rotation`: The amount to rotate the `value` by.

*   `rol(value, rotation)`: Rotate a byte to the left by the specified amount of
    rotation.

    *   `value`: Decimal representation of a byte to be rotated.

    *   `rotation`: The amount to rotate the `value` by.

Both methods return a decimal representation of a value rotated.

### `rorInt8(value, rotation)`

Convenience method for rotating an 8-bit value right.

### `rolInt8(value, rotation)`

Convenience method for rotating an 8-bit value left.

### `rorInt16(value, rotation)`

Convenience method for rotating a 16-bit value right.

### `rolInt16(value, rotation)`

Convenience method for rotating a 16-bit value left.

### `rorInt32(value, rotation)`

Convenience method for rotating a 32-bit value right.

### `rolInt32(value, rotation)`

Convenience method for rotating a 32-bit value left.

[1]: https://en.wikipedia.org/wiki/Circular_shift
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
