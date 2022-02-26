import { CharacterSetForSeedphrase } from './seedphrase-encoder';
import { CharEncoder, CharValidator } from './char-encoder';
import { CharacterSet } from './character-set';
import { EncryptionAlgorithm } from './encoder';
export { EncryptionAlgorithm } from './encoder';
import { ValidationAlgorithm } from './validator';
export { ValidationAlgorithm } from './validator';

export const SeephraseCharSet = new CharacterSetForSeedphrase();

export function charEncoder(characterSet: CharacterSet): EncryptionAlgorithm {
    return CharEncoder(characterSet, CharValidator(characterSet));
}

