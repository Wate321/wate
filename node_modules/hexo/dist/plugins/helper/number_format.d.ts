interface Options {
    delimiter?: string;
    separator?: string;
    precision?: number | false;
}
declare function numberFormatHelper(num: number, options?: Options): string;
export = numberFormatHelper;
