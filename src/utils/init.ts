import  { utils } from './';

export type Word = {
    listId: number,
    value: string,
    description: string,
    progress: number,
};

export type List = {
    id: number,
    words: Array<Word>,
    type: 'public' | 'private',
    keywords: string, 
    progress: number, // 0 - 100%
    timeout: number,
    alarm: number,
};

const MOCK_WORDS = ['hello', 'this', 'is', 'fake', 'list'];
const MOCK_DESCRIPTION = ['fake description 1', 'fake description 2'];
const ACCESS_MOCK: Array<'public' | 'private'> = ['public', 'private'];
const KEYWORDS_MOCK = ['awesome', 'app', 'keywords'];

const generateWord = (id: number): Word => ({
    listId: id,
    value: utils.getRandomFromArray(MOCK_WORDS),
    description: utils.getRandomFromArray(MOCK_DESCRIPTION),
    progress: utils.randomRange(0, 100),
});

const generateWords = (id: number, from: number, to: number): Array<Word> => {
    return Array.from(new Array(utils.randomRange(from, to)).keys()).map(item => generateWord(id));
};

const getRandomOfArray = <T>(arr: Array<T>): T => arr[utils.randomRange(0, arr.length)];

const MIN_LIST_ID = 0;
const MAX_LIST_ID = 1000;

const FIRST_WORD = 0;
const WORDS_LENGTH = 10;

const ZERO_PROGRESS = 0;
const COMPLETED_LIST_PROGRESS = 100;

const MIN_TIMEOUT = 6;
const MAX_TIMEOUT = 48; // hours?

const MIN_NUMBER_OF_ALARMS = 1;
const MAX_NUMBER_OF_ALARMS = 6;

export const generateUniqId = (): number => utils.randomRange(MIN_LIST_ID, MAX_LIST_ID);

export const generateList = (): List => {
    const listId = generateUniqId();
    return ({
        id: listId,
        words: generateWords(listId, FIRST_WORD, WORDS_LENGTH),
        type: getRandomOfArray(ACCESS_MOCK),
        keywords: getRandomOfArray(KEYWORDS_MOCK),
        progress: utils.randomRange(ZERO_PROGRESS, COMPLETED_LIST_PROGRESS),
        timeout: utils.randomRange(MIN_TIMEOUT, MAX_TIMEOUT),
        alarm: utils.randomRange(MIN_NUMBER_OF_ALARMS, MAX_NUMBER_OF_ALARMS),
    });
};