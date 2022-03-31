import { AbstractCharacterSet } from './character-set';

export class CharacterSetForSeedphrase extends AbstractCharacterSet {
     protected characterSet(): string {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
}; 
