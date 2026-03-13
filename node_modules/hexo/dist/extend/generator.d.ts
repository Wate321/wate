import Promise from 'bluebird';
import type { NodeJSLikeCallback } from '../types';
interface BaseObj {
    path: string;
    data?: any;
    layout?: string | string[];
}
type ReturnType = BaseObj | BaseObj[];
type GeneratorReturnType = ReturnType | Promise<ReturnType>;
interface GeneratorFunction {
    (locals: any, callback?: NodeJSLikeCallback<any>): GeneratorReturnType;
}
type StoreFunctionReturn = Promise<ReturnType>;
interface StoreFunction {
    (locals: any): StoreFunctionReturn;
}
interface Store {
    [key: string]: StoreFunction;
}
declare class Generator {
    id: number;
    store: Store;
    constructor();
    list(): Store;
    get(name: string): StoreFunction;
    register(fn: GeneratorFunction): void;
    register(name: string, fn: GeneratorFunction): void;
}
export = Generator;
