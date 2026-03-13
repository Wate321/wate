import Promise from 'bluebird';
import type Hexo from './index';
import type { Renderer } from '../extend';
import type { StoreFunction, StoreFunctionData, StoreSyncFunction } from '../extend/renderer';
import { NodeJSLikeCallback } from '../types';
declare class Render {
    context: Hexo;
    renderer: Renderer;
    constructor(ctx: Hexo);
    isRenderable(path: string): boolean;
    isRenderableSync(path: string): boolean;
    getOutput(path: string): string;
    getRenderer(ext: string, sync?: boolean): StoreSyncFunction | StoreFunction;
    getRendererSync(ext: string): StoreSyncFunction | StoreFunction;
    render(data: StoreFunctionData, callback?: NodeJSLikeCallback<any>): Promise<any>;
    render(data: StoreFunctionData, options: any, callback?: NodeJSLikeCallback<any>): Promise<any>;
    renderSync(data: StoreFunctionData, options?: {}): any;
}
export = Render;
