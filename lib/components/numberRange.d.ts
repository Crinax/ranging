export = NumberRange;

declare class NumberRange extends AbstractRange {
    // 0
    constructor();
    // 1
    constructor(end: number);
    constructor(map: (item: number, index: number) => any);
    constructor(options: {
        start?: number,
        end?: number,
        step?: number,
        count?: number,
        map?: (item: number, index: number) => any,
        filter?: (item: number, index: number) => boolean,
        isFloat?: boolean,
    });
    // 2
    constructor(start: number, end: number);
    constructor(end: number, map: (item: number, index: number) => any);
    constructor(
        map: (item: number, index: number) => number,
        filter: (item: number, index: number) => boolean,
    );
    // 3
    constructor(start:number, end: number, step: number);
    constructor(start:number, end: number, map: (item: number, index: number) => any);
    constructor(
        end: number,
        map: (item: number, index: number) => any,
        filter: (item: number, index: number) => boolean,
    );
    // 4
    constructor(
        start: number,
        end: number,
        step: number,
        map: (item: number, index: number) => any,
    );
    constructor(
        start: number,
        end: number,
        map: (item: number, index: number) => any,
        filter: (item: number, index: number) => boolean,
    );

    // 5
    constructor(
        start: number,
        end: number,
        step: number,
        map: (item: number, index: number) => any,
        filter: (item: number, index: number) => boolean,
    );

    end(value: number): NumberRange;
    start(value: number): NumberRange;
    step(value: number): NumberRange;
    isFloat(value: boolean): NumberRange;
    map(f: (item: number, index: number) => any): NumberRange;
    filter(f: (item: number, index: number) => boolean): NumberRange;
    reduce(f: (previousValue: number, currentValue: number, index: number) => any, initial?: any): any;
    get sum(): number;
    [Symbol.iterator](): Iterator<IteratorResult<number>>;

    options: object
}
import AbstractRange = require("./AbstractRange");
