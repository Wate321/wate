import type Hexo from './index';
import type { NodeJSLikeCallback } from '../types';
import type Promise from 'bluebird';
declare class Scaffold {
    context: Hexo;
    scaffoldDir: string;
    defaults: {
        normal: string;
    };
    constructor(context: Hexo);
    _listDir(): Promise<{
        name: string;
        path: string;
    }[]>;
    _getScaffold(name: string): Promise<{
        name: string;
        path: string;
    }>;
    get(name: string, callback?: NodeJSLikeCallback<any>): Promise<string>;
    set(name: string, content: any, callback?: NodeJSLikeCallback<void>): Promise<void>;
    remove(name: string, callback?: NodeJSLikeCallback<void>): Promise<void>;
}
export = Scaffold;
