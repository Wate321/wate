import { Moment } from 'moment';
import type { LocalsType } from '../../types';
interface Options {
    image?: string;
    images?: string[];
    description?: string;
    title?: string;
    type?: string;
    url?: string;
    site_name?: string;
    twitter_card?: string;
    date?: Moment | Date | false;
    updated?: Moment | Date | false;
    language?: string;
    author?: string;
    twitter_image?: string;
    twitter_id?: string;
    twitter_site?: string;
    fb_admins?: string;
    fb_app_id?: string;
}
declare function openGraphHelper(this: LocalsType, options?: Options): string;
export = openGraphHelper;
