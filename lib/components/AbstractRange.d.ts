export = AbstractRange;
declare class AbstractRange {
    static parseParameters(...options: any[]): object;
    end(value: any): AbstractRange;
    start(value: any): AbstractRange;
    step(value: any): AbstractRange;
    isFloat(value: any): AbstractRange;
    count(value: number): AbstractRange;
    map(f: any): AbstractRange;
    filter(f: any): AbstractRange;
    reduce(f: any, initial?: any): any;
    get length(): number;
}
