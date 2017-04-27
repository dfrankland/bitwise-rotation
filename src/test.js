import assert from 'assert';
import bitwiseRotation from '../dist/index';

const INT_BIT = 32;
const MAX_SAFE_SIGNED_INTEGER = (2 ** (INT_BIT - 1)) - 1;

const { ror, rol } = bitwiseRotation(INT_BIT);

const rotation = INT_BIT - 1;

const rotatedRight = ror(MAX_SAFE_SIGNED_INTEGER, rotation);
const rotatedLeft = rol(rotatedRight, rotation);

assert.equal(MAX_SAFE_SIGNED_INTEGER, rotatedLeft);
