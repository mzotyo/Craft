import { Char } from './char';

export default (char: Char, passChar: Char) => char.shift(passChar.index());
