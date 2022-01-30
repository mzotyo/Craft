import { Pair, slice, DELIMITER, ascii, toChar, delimiter, invalidChar, spaces } from './common';

const ASCII_OFFSET: number = ascii('Z') - ascii('A') + 1;

export function encrypt(text: string, passphrase: string): string {
    const pairs: Pair[] = slice(text.trim(), passphrase);
    const encryptedWords: string[] = pairs
            .map((pair) => encryptWord(pair.word, pair.pass));
    
    const permutation: string[] = permutate(encryptedWords, 4);
    
    return permutation
            .reduce((concatenated, word) => concatenated + delimiter(concatenated) + word);
}

export function encryptWord(word: string, password: string) {
    validateWord(word, password);

    let encrypted: string = '';
    for(let i=0; i < word.length; i++) {
        encrypted += encryptChar(word.charAt(i), password.charAt(i));
    }
    return encrypted + spaces(encrypted); 
}

function validateWord(text: string, password: string) {
    if(text.length > 4) {
       throw '[encryptWord] Word length should be less or equal to 4 but it was ' + text.length + ' [' + text + ']'; 
    }

    if(password.length < text.length) {
       throw '[encryptWord] The password should be at least as long as the text to be encrypted [' + text + ', ' + password + ']';
    }
}

export function encryptChar(char: string, pass: string): string {
    const character = char.toUpperCase();
    const password = pass.toUpperCase();

    validateChar(character, password);

    const encOffset = (ascii(password) - ascii('A'));
    const shiftedAscii = ascii(character) + encOffset;
    const correctedAscii = shiftedAscii > ascii('Z') ? shiftedAscii - ASCII_OFFSET : shiftedAscii;
    return toChar(correctedAscii);
}

function validateChar(text: string, password: string) {
    if(text.length === 1 && invalidChar(text)) {
        throw '[encryptChar] Invalid character: ' + text;
    }

    if(password.length === 1 && invalidChar(password)) {
        throw '[encryptChar] Invalid character in the password: ' + password;
    }
}

export function permutate(words: string[], wordLength: number): string[] {
    const nrOfRows = wordLength;
    const nrOfCols = words.length / nrOfRows;
    const permutation: string[] = [];

    for(let col = 0; col < nrOfCols; ++col) {
        for(let char = 0; char < 4; ++char) {
            let colValue = '';
            for(let row = 0; row < nrOfRows; ++row) {
                const currentChar = words[row * nrOfCols + col].charAt(char)
                colValue += currentChar.length && currentChar !== DELIMITER ? currentChar : '_';
            }
            permutation.push(colValue);
        }
    }
    return permutation;
}


function passShift(pass: string): number {
    return ascii(pass) - ascii('A');
}

