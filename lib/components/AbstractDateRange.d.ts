export = AbstractDateRange;
declare class AbstractDateRange extends AbstractRange {
    // 0
    constructor();
    // 1
    constructor(end: Date);
    constructor(map: (item: Date, index: number) => any);
    constructor(options: {
        start?: Date,
        end?: Date,
        step?: number,
        count?: number,
        map?: (item: Date, index: number) => any,
        filter?: (item: Date, index: number) => boolean,
    });
    // 2
    constructor(start: Date, end: Date);
    constructor(end: Date, map: (item: Date, index: number) => any);
    constructor(
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    );
    // 3
    constructor(start:Date, end: Date, step: number);
    constructor(start:Date, end: Date, map: (item: Date, index: number) => any);
    constructor(
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    );
    // 4
    constructor(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
    );
    constructor(
        start: Date,
        end: Date,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    );

    // 5
    constructor(
        start: Date,
        end: Date,
        step: number,
        map: (item: Date, index: number) => any,
        filter: (item: Date, index: number) => boolean,
    );

    end(value: Date): AbstractDateRange;
    start(value: Date): AbstractDateRange;
    step(value: number): AbstractDateRange;
    weekdays(value: number[]): AbstractDateRange;
    leepYear(value: boolean): AbstractDateRange;
    map(f: (item: Date, index: number) => any): AbstractDateRange;
    filter(f: (item: Date, index: number) => boolean): AbstractDateRange;
    reduce(f: (previousValue: Date, currentValue: Date, index: number) => any, initial?: any): any;

    options: object;
    
    protected setLiterals(): void;
    protected literals: {
        get: string;
        set: string;
    };
    protected getTime(start: any): any;
    protected setTime(start: any, value: any): any;
}
import AbstractRange = require("./AbstractRange");
