import type { NodeJSLikeCallback } from '../types';
interface StoreFunction {
    (args: any, callback?: NodeJSLikeCallback<any>): any;
}
interface Store {
    [key: string]: StoreFunction;
}
declare class Migrator {
    store: Store;
    constructor();
    list(): Store;
    get(name: string): StoreFunction;
    register(name: string, fn: StoreFunction): void;
}
export = Migrator;
