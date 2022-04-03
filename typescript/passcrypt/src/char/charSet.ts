import { Maybe, Some, None } from 'monet';

const INVALID_CHAR_LENGTH = 'The input char length should be equal to one!';
const INVALID_CHARSET_LENGTH = 'The character set should be at least one character long!';
const INVALID_CHAR = 'The input character should be part of the character set!';
const GET_OPERATION_NOT_ALLOWED = 'Get operation is not allowed on a invalid char!';
const INDEX_OPERATION_NOT_ALLOWED = 'Index operation is not allowed on a invalid char!';

type CharTransformFunction = (char: string) => string;

//-----------------------------------------------------------------------------
// abstract class Char
//-----------------------------------------------------------------------------
export abstract class Char {
  abstract isValid(): boolean;
  abstract get(): string;
  abstract index(): number;
  abstract shift(n: number): Char;
  abstract map(transform: CharTransformFunction): Char;

  static charSet(characterSet: string) {
    return function (char: string): Char {
      if(Char.isValidCharSet(characterSet) && Char.isValidChar(char, characterSet)) {
        return new ValidChar(char, characterSet);
      } else {
        return new InvalidChar();
      }
    }
  }

  private static isValidChar(char: string, characterSet: string): boolean {
    if(char.length != 1) {
      return false;
    }

    if(characterSet.search(char) < 0) {
      return false; 
    } 
    return true;
  }

  private static isValidCharSet(characterSet: string): boolean {
    return characterSet.length > 0;
  }
}

//-----------------------------------------------------------------------------
// class ValidChar
//-----------------------------------------------------------------------------
class ValidChar extends Char {
  private char: string;
  private characterSet: string;

  constructor(char: string, characterSet: string) {
    super();
    this.char = char;
    this.characterSet = characterSet;
  }

  public isValid(): boolean {
    return true;
  }

  public get(): string {
    return this.char;
  }

  public index(): number {
    return this.characterSet.search(this.char);
  }

  public shift(n: number): Char {
    return new ValidChar(this.get(), this.characterSet);
  }

  public map(transform: CharTransformFunction): Char {
    const char = transform(this.char);
    return Char.charSet(this.characterSet)(char);
  }
}

//-----------------------------------------------------------------------------
// class InvalidChar
//-----------------------------------------------------------------------------
class InvalidChar extends Char {
  constructor() {
    super();
  }

  public isValid(): boolean {
    return false;
  }

  public get(): string {
    throw GET_OPERATION_NOT_ALLOWED;
  }

  public index(): number {
    throw INDEX_OPERATION_NOT_ALLOWED;
  }

  public shift(n: number): Char {
    return new InvalidChar();
  }
  
  public map(transform: CharTransformFunction): Char {
    return new InvalidChar();
  }
}
