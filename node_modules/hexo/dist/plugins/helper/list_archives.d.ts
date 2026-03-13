import type { LocalsType } from '../../types';
interface Options {
    format?: string;
    type?: string;
    style?: string | false;
    transform?: (name: string) => string;
    separator?: string;
    show_count?: boolean;
    class?: string;
    order?: number;
}
declare function listArchivesHelper(this: LocalsType, options?: Options): string;
export = listArchivesHelper;
