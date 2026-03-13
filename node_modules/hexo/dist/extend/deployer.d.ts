import type { NodeJSLikeCallback } from '../types';
interface StoreFunction {
    (deployArg: {
        type: string;
        [key: string]: any;
    }, callback?: NodeJSLikeCallback<any>): any;
}
interface Store {
    [key: string]: StoreFunction;
}
declare class Deployer {
    store: Store;
    constructor();
    list(): Store;
    get(name: string): StoreFunction;
    register(name: string, fn: StoreFunction): void;
}
export = Deployer;
