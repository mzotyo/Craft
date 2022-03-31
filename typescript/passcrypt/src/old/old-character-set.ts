export interface CharacterSet {
    at(index: number): string;
    index(char: string): number;
    shift(char: string, index: number): string;
};

export abstract class AbstractCharacterSet implements CharacterSet {
    protected abstract characterSet(): string;

    public at(index: number): string {
        const normalizedIndex = index % this.characterSet().length;
        return this.characterSet().substr(normalizedIndex, 1);
    }

    public index(char: string): number {
        if(char.length != 1) {
            return -1;
        }
        return this.characterSet().search(char);
    }

    public shift(char: string, index: number): string {
        const shiftedIndex = this.index(char) + index;
        return this.at(shiftedIndex);
    }
}
