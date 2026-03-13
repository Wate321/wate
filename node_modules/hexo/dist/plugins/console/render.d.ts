import type Hexo from '../../hexo';
interface RenderArgs {
    _: string[];
    o?: string;
    output?: string;
    pretty?: boolean;
    engine?: string;
    [key: string]: any;
}
declare function renderConsole(this: Hexo, args: RenderArgs): import("bluebird")<any>;
export = renderConsole;
