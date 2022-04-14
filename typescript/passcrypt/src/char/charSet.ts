//-----------------------------------------------------------------------------
// Char
//-----------------------------------------------------------------------------
abstract class Char {
  static from(char: string, charSet: string): Char {
    const valid = validate(char, charSet);
    if(!valid) {
      return new InvalidChar();
    }
    return new ValidChar(char, charSet);
  }

  abstract isValid(): boolean;

  abstract encrypt(key: Char): Char;
}


function validate(char: string, charSet: string): boolean {
  if(charSet.search(char) < 0) {
    return false
  }
  return true;
}

//-----------------------------------------------------------------------------
// ValidChar
//-----------------------------------------------------------------------------
class ValidChar implements Char {
  private char;
  private charSet;

  constructor(char: string, charSet: string) {
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

//-----------------------------------------------------------------------------
// InvalidChar
//-----------------------------------------------------------------------------
class InvalidChar implements Char {

  public isValid(): boolean {
    return false;
  }

public encrypt(): Char {
    throw 'This operation is not allowed for invalid characters.';
  }
}

//-----------------------------------------------------------------------------
// Methods
//-----------------------------------------------------------------------------
type ToChar = (char: string) => Char;

export function characterSet(charSet: string): ToChar {
  return function(char: string): Char {
    return Char.from(char, charSet);
  }
}

