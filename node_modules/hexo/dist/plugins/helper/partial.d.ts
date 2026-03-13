import type Hexo from '../../hexo';
import type { LocalsType } from '../../types';
interface Options {
    cache?: boolean | string;
    only?: boolean;
}
declare const _default: (ctx: Hexo) => (this: LocalsType, name: string, locals?: any, options?: Options) => any;
export = _default;
