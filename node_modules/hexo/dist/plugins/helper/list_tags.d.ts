import type { TagSchema } from '../../types';
import type Query from 'warehouse/dist/query';
interface Options {
    style?: string | false;
    class?: any;
    amount?: number;
    orderby?: string;
    order?: number;
    transform?: (name: string) => string;
    separator?: string;
    show_count?: boolean;
    suffix?: string;
}
declare function listTagsHelperFactory(tags?: Query<TagSchema> | Options, options?: Options): any;
export = listTagsHelperFactory;
