export class Char {
  private char: string;
  private charSet: string;

  constructor(char: string, charSet: string) {
    this.char = char; 
    this.charSet = charSet;
  }

  public encrypt(passChar: Char): Char {
    return this.shift(passChar.index());
  }

  private index(): number {
    return this.charSet.search(this.char);
  }

  private shift(index: number): Char {
    const shiftedIndex = this.shiftIndex(index);
    const shiftedChar = this.at(shiftedIndex);
    return new Char(shiftedChar, this.charSet);
  }

  private shiftIndex(index: number): number {
    return (this.charSet.search(this.char) + index) % this.charSet.length
  }

  private at(index: number): string {
    return this.charSet.substr(index, 1);
  }
}
