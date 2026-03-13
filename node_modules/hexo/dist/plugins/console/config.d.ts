import Promise from 'bluebird';
import type Hexo from '../../hexo';
interface ConfigArgs {
    _: string[];
    [key: string]: any;
}
declare function configConsole(this: Hexo, args: ConfigArgs): Promise<void>;
export = configConsole;
