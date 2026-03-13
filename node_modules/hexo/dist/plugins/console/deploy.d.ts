import type Hexo from '../../hexo';
interface DeployArgs {
    _?: string[];
    g?: boolean;
    generate?: boolean;
    [key: string]: any;
}
declare function deployConsole(this: Hexo, args: DeployArgs): any;
export = deployConsole;
