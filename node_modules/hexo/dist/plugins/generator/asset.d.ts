import Promise from 'bluebird';
import type Hexo from '../../hexo';
import type { AssetGenerator } from '../../types';
declare function assetGenerator(this: Hexo): Promise<AssetGenerator[]>;
export = assetGenerator;
