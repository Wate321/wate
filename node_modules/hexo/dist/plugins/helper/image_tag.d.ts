import type { LocalsType } from '../../types';
interface Options {
    src?: string;
    alt?: string;
    class?: string | string[];
}
declare function imageTagHelper(this: LocalsType, path: string, options?: Options): string;
export = imageTagHelper;
