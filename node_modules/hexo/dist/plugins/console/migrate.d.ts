import type Hexo from '../../hexo';
interface MigrateArgs {
    _: string[];
    [key: string]: any;
}
declare function migrateConsole(this: Hexo, args: MigrateArgs): any;
export = migrateConsole;
