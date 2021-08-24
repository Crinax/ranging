export = CharRange;
declare class CharRange extends AbstractRange {
    // 0
    constructor();
    // 1
    constructor(end: string);
    constructor(map: (item: string, index: number) => any);
    constructor(options: {
        start?: string,
        end?: string,
        step?: number,
        count?: number,
        map?: (item: string, index: number) => any,
        filter?: (item: string, index: number) => boolean,
    });
    // 2
    constructor(start: string, end: string);
    constructor(end: string, map: (item: string, index: number) => any);
    constructor(
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );
    // 3
    constructor(start:string, end: string, step: number);
    constructor(start:string, end: string, map: (item: string, index: number) => any);
    constructor(
        end: string,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );
    // 4
    constructor(
        start: string,
        end: string,
        step: number,
        map: (item: string, index: number) => any,
    );
    constructor(
        start: string,
        end: string,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );

    // 5
    constructor(
        start: string,
        end: string,
        step: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );

    end(value: string): CharRange;
    start(value: string): CharRange;
    step(value: number): CharRange;
    map(f: (item: string, index: number) => any): CharRange;
    filter(f: (item: string, index: number) => boolean): CharRange;
    reduce(f: (previousValue: string, currentValue: string, index: number) => any, initial?: any): any;
    [Symbol.iterator](): Iterator<IteratorResult<string>>;

    options: object;
}
import AbstractRange = require("./AbstractRange");
