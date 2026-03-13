import type Hexo from '../../../hexo';
interface ListArgs {
    _: string[];
}
declare function listConsole(this: Hexo, args: ListArgs): import("bluebird")<any>;
export = listConsole;
