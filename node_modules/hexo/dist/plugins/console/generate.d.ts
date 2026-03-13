import Promise from 'bluebird';
import type Hexo from '../../hexo';
interface GenerateArgs {
    f?: boolean;
    force?: boolean;
    b?: boolean;
    bail?: boolean;
    c?: string;
    concurrency?: string;
    w?: boolean;
    watch?: boolean;
    d?: boolean;
    deploy?: boolean;
    [key: string]: any;
}
declare function generateConsole(this: Hexo, args?: GenerateArgs): Promise<any>;
export = generateConsole;
