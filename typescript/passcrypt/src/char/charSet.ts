import { Char } from "./char";

export class CharSet {
  private charSet: string;

  constructor(charSet: string) {
    this.charSet = charSet;
  }

  public char(character: string) {
    return new Char(character, this.charSet);
  }
}
