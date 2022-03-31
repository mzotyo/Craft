export interface ValidationAlgorithm {
   (text: string, password: string): void; 
}

export interface Validator {
    (characterSet: CharacterSet): ValidationAlgorithm;
}
