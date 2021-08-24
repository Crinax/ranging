export = StringRange;
declare class StringRange extends AbstractRange {
    // 1
    constructor(source: string);
    // 2
    constructor(source: string, end: number);
    constructor(source: string, map: (item: string, index: number) => any);
    constructor(options: {
        source: string,
        start?: 0,
        end?: number,
        step?: 1,
        count?: number,
        map?: (item: string, index: number) => any,
        filter?: (item: string, index: number) => boolean,
    });
    // 3
    constructor(source: string, start: number, end: number);
    constructor(source: string, start: number, map: (item: string, index: number) => any);
    constructor(
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );
    // 4
    constructor(source: string, start: number, end: number, step: number);
    constructor(source: string, start: number, end: number, map: (item: string, index: number) => any);
    constructor(
        end: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );
    // 5
    constructor(
        source: string,
        start: number,
        end: number,
        step: number,
        map: (item: string, index: number) => any,
    );
    constructor(
        source: string,
        start: number,
        end: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );

    // 6
    constructor(
        source: string,
        start: number,
        end: number,
        step: number,
        map: (item: string, index: number) => any,
        filter: (item: string, index: number) => boolean,
    );

    source(source: string): StringRange;
    end(value: string): StringRange;
    start(value: string): StringRange;
    step(value: number): StringRange;
    map(f: (item: string, index: number) => any): StringRange;
    filter(f: (item: string, index: number) => boolean): StringRange;
    reduce(f: (previousValue: string, currentValue: string, index: number) => any, initial?: any): any;
    [Symbol.iterator](): Iterator<IteratorResult<string>>;

    options: object;
}
import AbstractRange = require("./AbstractRange");
