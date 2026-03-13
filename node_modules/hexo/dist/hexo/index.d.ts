/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import Promise from 'bluebird';
import Database from 'warehouse';
import { EventEmitter } from 'events';
import Module from 'module';
import logger from 'hexo-log';
import { Console, Deployer, Filter, Generator, Helper, Highlight, Injector, Migrator, Processor, Renderer, Tag } from '../extend';
import Render from './render';
import Post from './post';
import Scaffold from './scaffold';
import Source from './source';
import Router from './router';
import Theme from '../theme';
import Locals from './locals';
import defaultConfig from './default_config';
import type { AssetGenerator, NodeJSLikeCallback, NormalPageGenerator, NormalPostGenerator, PageGenerator, PostGenerator, SiteLocals } from '../types';
import type { AddSchemaTypeOptions } from 'warehouse/dist/types';
import type Schema from 'warehouse/dist/schema';
interface Args {
    debug?: boolean;
    safe?: boolean;
    silent?: boolean;
    draft?: boolean;
    drafts?: boolean;
    _?: string[];
    output?: string;
    config?: string;
    [key: string]: any;
}
interface Extend {
    console: Console;
    deployer: Deployer;
    filter: Filter;
    generator: Generator;
    helper: Helper;
    highlight: Highlight;
    injector: Injector;
    migrator: Migrator;
    processor: Processor;
    renderer: Renderer;
    tag: Tag;
}
interface Env {
    args: Args;
    debug: boolean;
    safe: boolean;
    silent: boolean;
    env: string;
    version: string;
    cmd: string;
    init: boolean;
}
type DefaultConfigType = typeof defaultConfig;
interface Config extends DefaultConfigType {
    [key: string]: any;
}
declare module 'module' {
    function _nodeModulePaths(path: string): string[];
    function _resolveFilename(request: string, parent: Module, isMain?: any, options?: any): string;
    const _extensions: NodeJS.RequireExtensions, _cache: any;
}
interface Hexo {
    /**
     * Emitted before deployment begins.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#deployBefore
     */
    on(event: 'deployBefore', listener: (...args: any[]) => any): this;
    /**
     * Emitted after deployment begins.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#deployAfter
     */
    on(event: 'deployAfter', listener: (...args: any[]) => any): this;
    /**
     * Emitted before Hexo exits.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#exit
     */
    on(event: 'exit', listener: (...args: any[]) => any): this;
    /**
     * Emitted before generation begins.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#generateBefore
     */
    on(event: 'generateBefore', listener: (...args: any[]) => any): this;
    /**
     * Emitted after generation finishes.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#generateAfter
     */
    on(event: 'generateAfter', listener: (...args: any[]) => any): this;
    /**
     * Emitted after a new post has been created. This event returns the post data:
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#new
     */
    on(event: 'new', listener: (post: {
        path: string;
        content: string;
    }) => any): this;
    /**
     * Emitted before processing begins. This event returns a path representing the root directory of the box.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#processBefore
     */
    on(event: 'processBefore', listener: (...args: any[]) => any): this;
    /**
     * Emitted after processing finishes. This event returns a path representing the root directory of the box.
     * @param event
     * @param listener
     * @link https://hexo.io/api/events.html#processAfter
     */
    on(event: 'processAfter', listener: (...args: any[]) => any): this;
    /**
     * Emitted after initialization finishes.
     * @param event
     * @param listener
     */
    on(event: 'ready', listener: (...args: any[]) => any): this;
    /**
     * undescripted on emit
     * @param event
     * @param listener
     */
    on(event: string, listener: (...args: any[]) => any): any;
    emit(event: string, ...args: any[]): any;
}
declare class Hexo extends EventEmitter {
    base_dir: string;
    public_dir: string;
    source_dir: string;
    plugin_dir: string;
    script_dir: string;
    scaffold_dir: string;
    theme_dir: string;
    theme_script_dir: string;
    env: Env;
    extend: Extend;
    config: Config;
    log: ReturnType<typeof logger>;
    render: Render;
    route: Router;
    post: Post;
    scaffold: Scaffold;
    _dbLoaded: boolean;
    _isGenerating: boolean;
    database: Database;
    config_path: string;
    source: Source;
    theme: Theme;
    locals: Locals;
    version: string;
    _watchBox: () => void;
    lib_dir: string;
    core_dir: string;
    static lib_dir: string;
    static core_dir: string;
    static version: string;
    constructor(base?: string, args?: Args);
    _bindLocals(): void;
    init(): Promise<void>;
    call(name: string, callback?: NodeJSLikeCallback<any>): Promise<any>;
    call(name: string, args: object, callback?: NodeJSLikeCallback<any>): Promise<any>;
    model(name: string, schema?: Schema | Record<string, AddSchemaTypeOptions>): import("warehouse/dist/model").default<any>;
    resolvePlugin(name: string, basedir: string): string;
    loadPlugin(path: string, callback?: NodeJSLikeCallback<any>): Promise<any>;
    _showDrafts(): boolean;
    load(callback?: NodeJSLikeCallback<any>): Promise<any>;
    watch(callback?: NodeJSLikeCallback<any>): Promise<any>;
    unwatch(): void;
    _generateLocals(): {
        new (path: string, locals: NormalPageGenerator | NormalPostGenerator): {
            page: NormalPageGenerator | NormalPostGenerator;
            path: string;
            url: string;
            config: any;
            theme: any;
            layout: string;
            env: any;
            view_dir: string;
            site: SiteLocals;
            cache?: boolean;
        };
    };
    _runGenerators(): Promise<(AssetGenerator | PostGenerator | PageGenerator)[]>;
    _routerRefresh(runningGenerators: Promise<(AssetGenerator | PostGenerator | PageGenerator)[]>, useCache: boolean): Promise<void>;
    _generate(options?: {
        cache?: boolean;
    }): Promise<any>;
    exit(err?: any): Promise<void>;
    execFilter(type: string, data: any, options?: any): Promise<any>;
    execFilterSync(type: string, data: any, options?: any): any;
}
declare global {
    const hexo: Hexo;
}
export = Hexo;
