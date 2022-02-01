const A = 65;
const Z = 90;
const LENGTH = 25;
const MODULE = 'encrypt-char';

export default function encrypt(char: string, passcode: string) {
    const error = validate(char, passcode);
    if(error) { throw error; }

    const shift = (toAscii(passcode) - A);
    const shifted = toAscii(char) + shift;

    const overflow = shifted > Z ? LENGTH + 1 : 0;
    const normalized = shifted - overflow;
    return toChar(normalized);
}

function validate(char: string, passcode: string): string {
    if(!hasValidLength(char)) {
        return `[${MODULE}] Text length of ${char.length} is not allowed!`
    }

    if(!hasValidLength(passcode)) {
        return `[${MODULE}] Password length of ${passcode.length} is not allowed!`
    }

    if(isInvalid(toAscii(char))) {
        return `[${MODULE}] Invalid character: ${char}`;
    }

    if(isInvalid(toAscii(passcode))) {
        return `[${MODULE}] Invalid character in the password: ${passcode}`;
    }

    return '';
}

const hasValidLength = (text: string): boolean => text.length === 1;
const isInvalid = (ascii: number): boolean => ascii < A || Z < ascii;
const toAscii = (char: string): number => char.charCodeAt(0);
const toChar = (ascii: number): string => String.fromCharCode(ascii);
