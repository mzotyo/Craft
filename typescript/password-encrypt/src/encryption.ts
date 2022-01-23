const ASCII_OFFSET: number = ascii('Z') - ascii('A') + 1;
const DELIMITER = ' ';

interface Pair {
    word: string;
    pass: string;
}

export function encrypt(text: string, passphrase: string): string {
    const pairs: Pair[] = slice(text.trim(), passphrase);
    const encryptedWords: string[] = pairs
            .map((pair) => encryptWord(pair.word, pair.pass));
    
    const permutation: string[] = permutate(encryptedWords, 4);
    
    return permutation
            .reduce((concatenated, word) => concatenated + delimiter(concatenated) + word);
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

interface PassSlice {
    text: string;
    index: number;
}

export function slice(text: string, passphrase: string): Pair[] {
    const pairs: Pair[] = [];
    let word: string = '';
    let pass: PassSlice = { text: '', index: 0 };

    validateSlice(text, passphrase);

    for(let i = 0; i <= text.length; ++i) {
        if(i === text.length || text.charAt(i) === DELIMITER) {
            if(text.charAt(i-1) !== DELIMITER) {
                pass = nextPass(passphrase, pass.index, text.length);
                pairs.push({ word: truncate(word), pass: pass.text });
                word = '';
            }
        } else {
            word += text.charAt(i);
        }
    }
    return pairs;
}

function nextPass(passphrase: string, currentIndex: number, length: number): PassSlice {
    let index = currentIndex;
    let text = passphrase.substr(currentIndex, 4);

    if(length >= 4 && text.length < 4) {
        index = 4 - text.length;
        text += passphrase.substr(0, index);
    } else {
        index += 4;
    }
    return { text, index };
}

export function encryptWord(word: string, password: string) {
    validateWord(word, password);

    let encrypted: string = '';
    for(let i=0; i < word.length; i++) {
        encrypted += encryptChar(word.charAt(i), password.charAt(i));
    }
    return encrypted + spaces(encrypted); 
}

export function encryptChar(char: string, pass: string): string {
    const character = char.toUpperCase();
    const password = pass.toUpperCase();

    validateChar(character, password);

    let passShiftedAscii = ascii(character) - passShift(password);

    if(ascii(password) > ascii(character)) {
        passShiftedAscii += ASCII_OFFSET;
    }

    return toChar(passShiftedAscii);
}

function truncate(text: string): string {
    return text.substr(0, 4);
}

function ascii(char: string): number {
    return char.charCodeAt(0);
}

function toChar(asc: number): string {
    return String.fromCharCode(asc);
}

function passShift(pass: string): number {
    return ascii(pass) - ascii('A');
}

function validateSlice(text: string, password: string) {
    if(text.charAt(0) === DELIMITER || text.charAt(text.length-1) === DELIMITER) {
        throw '[slice] Whitespace characters at the beginning or at the end of the text are not allowed';
    }

    if(password.search(DELIMITER) >= 0) {
        throw '[slice] Whitespace characters ar not allowed in the passphrase';
    }
}

function validateWord(text: string, password: string) {
    if(text.length > 4) {
       throw '[encryptWord] Word length should be less or equal to 4 but it was ' + text.length + ' [' + text + ']'; 
    }

    if(password.length < text.length) {
       throw '[encryptWord] The password should be at least as long as the text to be encrypted [' + text + ', ' + password + ']';
    }
}

function validateChar(text: string, password: string) {
    if(text.length === 1 && invalidChar(text)) {
        throw '[encryptChar] Invalid character: ' + text;
    }

    if(password.length === 1 && invalidChar(password)) {
        throw '[encryptChar] Invalid character in the password: ' + password;
    }
}

function delimiter(text: string): string {
    return text ? DELIMITER : '';
}

function invalidChar(char: string): boolean {
    return ascii('A') > ascii(char) || ascii(char) > ascii('Z');
}

function spaces(word: string): string {
    return ' '.repeat(4 - word.length);
}
