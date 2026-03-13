/// <reference path="router.d.ts" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
declare const Readable: typeof import("stream").Readable;
interface Data {
    data: any;
    modified: boolean;
}
declare module 'stream' {
    export default class _Stream extends Stream {
        readable: boolean;
    }
}
declare class RouteStream extends Readable {
    _data: any;
    _ended: boolean;
    modified: boolean;
    constructor(data: Data);
    _toBuffer(data: Buffer | object | string): Buffer | null;
    _read(): boolean;
}
declare class Router extends EventEmitter {
    routes: {
        [key: string]: Data | null;
    };
    emit: any;
    constructor();
    list(): string[];
    format(path?: string): string;
    get(path: string): RouteStream;
    isModified(path: string): boolean;
    set(path: string, data: any): this;
    remove(path: string): this;
}
export = Router;
