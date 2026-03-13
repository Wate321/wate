import type Hexo from '../../hexo';
import type { PostSchema } from '../../types';
declare function postPermalinkFilter(this: Hexo, data: PostSchema): string;
export = postPermalinkFilter;
