import type Hexo from '../../hexo';
interface PublishArgs {
    _: string[];
    r?: boolean;
    replace?: boolean;
    [key: string]: any;
}
declare function publishConsole(this: Hexo, args: PublishArgs): any;
export = publishConsole;
