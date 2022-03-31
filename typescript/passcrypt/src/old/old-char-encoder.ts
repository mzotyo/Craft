import { Validator, ValidationAlgorithm } from './validator';
import { Encoder, EncryptionAlgorithm } from './encoder';
import { CharacterSet } from './character-set';

export const CharEncoder: Encoder = 
    (characterSet: CharacterSet, validate: ValidationAlgorithm): EncryptionAlgorithm =>
        (char: string, passchar: string): string => {
            validate(char, passchar);

            const index = characterSet.index(passchar);
            return characterSet.shift(char, index);
}

export const CharValidator: Validator = 
    (characterSet: CharacterSet): ValidationAlgorithm =>
        (char: string, passchar: string): void => {
            if(char.length != 1)
                throw `[CharValidator] The length of the character should be 1 but it was ${char.length}`;
            if(passchar.length != 1)
                throw `[CharValidator] The length of the password should be 1 but it was ${passchar.length}`;
            if(characterSet.index(char) < 0)
                throw `[CharValidator] Invalid character: ${char}`;
            if(characterSet.index(passchar) < 0)
                throw `[CharValidator] Invalid character in the password: ${passchar}`;
}
