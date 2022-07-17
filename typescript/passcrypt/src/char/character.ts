/**
 * Char: abstract class for a character.
 */
export abstract class Char {
  /**
   * @returns if the character is valid or not.
   */
  public isValid(): boolean {
    return false;
  }

  /**
   * Encrypts the character with the given key.
   *
   * @param {key} is the key with which the character will be encrypted.
   * @returns a new encrypted character.
   * @throws an error for a char of type InvalidChar.
   */
  public encrypt(key: Char): Char {
    throw "This operation is not allowed for invalid characters.";
  }
}

/*
 * ValidChar: a class representing a valid character which makes part of the
 * valid character set.
 */
export class ValidChar extends Char {
  private char;
  private charSet;

  constructor(char: string, charSet: string) {
    super();
    this.char = char;
    this.charSet = charSet;
  }

  public isValid(): boolean {
    return true;
  }

  public encrypt(key: Char): Char {
    return new ValidChar(this.char, this.charSet);
  }
}

/*
 * InvalidChar: a class representing an invalid character which does not  make
 * part of the valid character set.
 */
export class InvalidChar extends Char {}
