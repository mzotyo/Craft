export const DELIMITER = ' ';

export interface Pair {
    word: string;
    pass: string;
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

function validateSlice(text: string, password: string) {
    if(text.charAt(0) === DELIMITER || text.charAt(text.length-1) === DELIMITER) {
        throw '[slice] Whitespace characters at the beginning or at the end of the text are not allowed';
    }

    if(password.search(DELIMITER) >= 0) {
        throw '[slice] Whitespace characters ar not allowed in the passphrase';
    }
}

export function ascii(char: string): number {
    return char.charCodeAt(0);
}

export function toChar(asc: number): string {
    return String.fromCharCode(asc);
}

export function delimiter(text: string): string {
    return text ? DELIMITER : '';
}

export function invalidChar(char: string): boolean {
    return ascii('A') > ascii(char) || ascii(char) > ascii('Z');
}

export function spaces(word: string): string {
    return ' '.repeat(4 - word.length);
}

function truncate(text: string): string {
    return text.substr(0, 4);
}


