import Hexo from '../../hexo';
interface NewArgs {
    _?: string[];
    p?: string;
    path?: string;
    s?: string;
    slug?: string;
    r?: boolean;
    replace?: boolean;
    [key: string]: any;
}
declare function newConsole(this: Hexo, args: NewArgs): any;
export = newConsole;
