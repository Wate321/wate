import type { LocalsType } from '../../types';
interface Options {
    title?: string;
    type?: string | null;
}
declare function feedTagHelper(this: LocalsType, path?: string, options?: Options): any;
export = feedTagHelper;
