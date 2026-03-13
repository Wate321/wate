import Promise from 'bluebird';
import type Theme from '.';
import type Render from '../hexo/render';
import type { NodeJSLikeCallback } from '../types';
import type { Helper } from '../extend';
declare class Options {
    layout?: any;
    [key: string]: any;
}
declare class View {
    path: string;
    source: string;
    _theme: Theme;
    data: any;
    _compiled: any;
    _compiledSync: any;
    _helper: Helper;
    _render: Render;
    constructor(path: string, data: string);
    render(callback: NodeJSLikeCallback<any>): Promise<any>;
    render(options: Options, callback?: NodeJSLikeCallback<any>): Promise<any>;
    renderSync(options?: Options): any;
    _buildLocals(locals: Options): any;
    _bindHelpers(locals: any): any;
    _resolveLayout(name: string): View;
    _precompile(): void;
}
export = View;
