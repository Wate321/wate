import { Environment } from 'nunjucks';
import Promise from 'bluebird';
import type { NodeJSLikeCallback } from '../types';
interface TagFunction {
    (args: any[], content: string, callback?: NodeJSLikeCallback<any>): string | PromiseLike<string>;
}
type RegisterOptions = {
    async?: boolean;
    ends?: boolean;
};
declare class Tag {
    env: Environment;
    source: string;
    constructor();
    register(name: string, fn: TagFunction): void;
    register(name: string, fn: TagFunction, ends: boolean): void;
    register(name: string, fn: TagFunction, options: RegisterOptions): void;
    unregister(name: string): void;
    render(str: string): Promise<any>;
    render(str: string, callback: NodeJSLikeCallback<any>): Promise<any>;
    render(str: string, options: {
        source?: string;
        [key: string]: any;
    }, callback?: NodeJSLikeCallback<any>): Promise<any>;
}
export = Tag;
