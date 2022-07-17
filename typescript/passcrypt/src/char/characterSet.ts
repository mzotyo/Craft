import { Char, ValidChar, InvalidChar } from "./character";

/**
 * Intarface for a character factory method
 */
interface CharacterFactory {
  (char: string): Char;
}

/**
 * Creates a factory method of type CharacterFactory.
 *
 * The factory method can create character object of type ValidChar or
 * InvalidChar.
 *
 * The characters are validated base upon they make part of the valid
 * character set or not.
 *
 * @param {charSet} defines the set of the valid characters.
 * @returns a character object based on the validation result.
 */
export function characterSet(charSet: string): CharacterFactory {
  return function (char: string): Char {
    return createChar(char, charSet);
  };
}

/**
 * Crates a character of type Char.
 *
 * Checks if the input parameter char is part of the input parameter charSet.
 * If it is part of the charSet then returns ValidChar other wise returns
 * InvalidChar.
 *
 * @param {char} character as string.
 * @param {charSet} valid char set, upon which the char will be validated.
 */
function createChar(char: string, charSet: string): Char {
  const valid = validate(char, charSet);

  if (valid) {
    return new ValidChar(char, charSet);
  }
  return new InvalidChar();
}

/**
 * Checks if the char input parameter makes part of the charSet input parameter
 *
 * @param {char} charcter to be validated
 * @param {char} valid charset, upon which the char will be validated.
 */
function validate(char: string, charSet: string): boolean {
  return charSet.search(char) >= 0;
}
