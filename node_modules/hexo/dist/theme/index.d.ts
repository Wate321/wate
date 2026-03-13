import Box from '../box';
import View from './view';
import I18n from 'hexo-i18n';
import type Hexo from '../hexo';
import type { Pattern } from 'hexo-util';
declare class Theme extends Box {
    config: any;
    views: Record<string, Record<string, View>>;
    i18n: I18n;
    View: typeof View;
    processors: {
        pattern: Pattern;
        process: (...args: any[]) => any;
    }[];
    constructor(ctx: Hexo, options?: any);
    getView(path: string): View;
    setView(path: string, data: string): void;
    removeView(path: string): void;
}
export = Theme;
