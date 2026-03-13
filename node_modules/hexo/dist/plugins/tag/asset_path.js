"use strict";
const hexo_util_1 = require("hexo-util");
module.exports = (ctx) => {
    const PostAsset = ctx.model('PostAsset');
    return function assetPathTag(args) {
        const slug = args.shift();
        if (!slug)
            return;
        const asset = PostAsset.findOne({ post: this._id, slug });
        if (!asset)
            return;
        const path = hexo_util_1.url_for.call(ctx, asset.path);
        return path;
    };
};
//# sourceMappingURL=asset_path.js.map