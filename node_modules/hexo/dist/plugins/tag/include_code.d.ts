import type Hexo from '../../hexo';
/**
* Include code tag
*
* Syntax:
*   {% include_code [title] [lang:language] path/to/file %}
*/
declare const _default: (ctx: Hexo) => (args: string[]) => string;
export = _default;
