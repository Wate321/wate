import Promise from 'bluebird';
import type Hexo from './index';
import type { NodeJSLikeCallback, RenderData } from '../types';
interface Result {
    path?: string;
    content?: string;
}
interface PostData {
    title?: string | number;
    layout?: string;
    slug?: string | number;
    path?: string;
    [prop: string]: any;
}
declare class Post {
    context: Hexo;
    constructor(context: Hexo);
    create(data: PostData, callback?: NodeJSLikeCallback<any>): any;
    create(data: PostData, replace: boolean, callback?: NodeJSLikeCallback<any>): any;
    _getScaffold(layout: string): Promise<string>;
    _renderScaffold(data: PostData): Promise<string>;
    publish(data: PostData, replace?: boolean): any;
    publish(data: PostData, callback?: NodeJSLikeCallback<Result>): any;
    publish(data: PostData, replace: boolean, callback?: NodeJSLikeCallback<Result>): any;
    render(source: string, data?: RenderData, callback?: NodeJSLikeCallback<never>): any;
}
export = Post;
