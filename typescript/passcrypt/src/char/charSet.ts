export class Char {
  public char;

  constructor(char: string) {
    this.char = char;
  }

  public encrypt(key: Char) {
    return new Char(this.char);
  }
}
