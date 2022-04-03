import { Maybe, Some, None } from 'monet';

const INVALID_CHAR_LENGTH = 'The input char length should be equal to one!';
const INVALID_CHARSET_LENGTH = 'The character set should contain at least one character!'
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
  abstract error(): string;

  static charSet(characterSet: string) {
    return function (char: string): Char {
      const charSetError = Char.isValidCharSet(characterSet);
      if(charSetError.isSome() ) {
        return new InvalidChar(charSetError.some());
      } 

      const charError = Char.isValidChar(char, characterSet);
      if(charError.isSome()){
        return new InvalidChar(charError.some());
      } 

      return new ValidChar(char, characterSet);
    }
  }

  private static isValidChar(char: string, characterSet: string): Maybe<string> {
    if(char.length != 1) {
      return Some('The input char length should be equal to one!');
    }

    if(characterSet.search(char) < 0) {
      return Some('The input character should be part of the character set!'); 
    } 
    return None();
  }

  private static isValidCharSet(characterSet: string): Maybe<string> {
    if(characterSet.length == 0) {
      return Some('The character set should contain at least one character!');
    };
    return None();
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

  public error(): string {
    throw '';
  }
}

//-----------------------------------------------------------------------------
// class InvalidChar
//-----------------------------------------------------------------------------
class InvalidChar extends Char {
  private errorMessage: string;

  constructor(errorMessage: string) {
    super();
    this.errorMessage = errorMessage;
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
    return new InvalidChar(this.errorMessage);
  }
  
  public error(): string {
    return this.errorMessage;
  }
 }
