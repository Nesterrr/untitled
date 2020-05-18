
export interface Utils {
    randomRange(
        from: number,
        to: number,
    ): number,
    getRandomFromArray(words: Array<string>): string;
};

export const utils: Utils = {
    randomRange: (
        from: number,
        to: number,
    ): number => Math.floor(Math.random() * (to - from)) + from,


    getRandomFromArray: (words: Array<string>): string => words[utils.randomRange(0, words.length)],
};