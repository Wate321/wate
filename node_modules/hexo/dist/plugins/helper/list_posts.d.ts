import type { LocalsType, PostSchema } from '../../types';
import type Query from 'warehouse/dist/query';
interface Options {
    style?: string | false;
    class?: string;
    amount?: number;
    orderby?: string;
    order?: number;
    transform?: (name: string) => string;
    separator?: string;
}
declare function listPostsHelper(this: LocalsType, posts?: Query<PostSchema> | Options, options?: Options): string;
export = listPostsHelper;
