import type { LocalsType } from '../../types';
interface Options {
    id?: string;
    href?: string;
    title?: string;
    external?: boolean | null;
    class?: string | string[];
    target?: string;
    rel?: string;
}
declare function linkToHelper(this: LocalsType, path: string, text?: string, options?: Options | boolean): string;
export = linkToHelper;
