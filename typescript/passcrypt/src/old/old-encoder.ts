import { ValidationAlgorithm } from './validator';
import { CharacterSet } from './character-set';

export interface EncryptionAlgorithm {
    (text: string, password: string): string;
}

export interface Encoder {
    (characterSet: CharacterSet, validate: ValidationAlgorithm): EncryptionAlgorithm;
}
