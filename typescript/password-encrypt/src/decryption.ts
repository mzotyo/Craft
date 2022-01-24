
export function inversePermutation(words: string[], wordLength: number): string[] {

    const nrOfRows = wordLength;
    const nrOfColumns = words.length / 4;
    const inversePermutation: string[] = [];

    for(let row = 0; row < nrOfRows; ++row) {
        for(let col = 0; col < nrOfColumns; ++col) {
            let word = '';
            for(let char =0; char < 4; ++char) {
                const currentChar = words[col * 4 + char].charAt(row);
                word += currentChar === '_' ? '' : currentChar;
            }
            inversePermutation.push(word);
        }
    }
    return inversePermutation;
}
