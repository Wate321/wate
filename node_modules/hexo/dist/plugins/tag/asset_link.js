"use strict";
const hexo_util_1 = require("hexo-util");
module.exports = (ctx) => {
    const PostAsset = ctx.model('PostAsset');
    return function assetLinkTag(args) {
        const slug = args.shift();
        if (!slug)
            return;
        const asset = PostAsset.findOne({ post: this._id, slug });
        if (!asset)
            return;
        let escape = args[args.length - 1];
        if (escape === 'true' || escape === 'false') {
            args.pop();
        }
        else {
            escape = 'true';
        }
        let title = args.length ? args.join(' ') : asset.slug;
        const attrTitle = (0, hexo_util_1.escapeHTML)(title);
        if (escape === 'true')
            title = attrTitle;
        const link = hexo_util_1.url_for.call(ctx, asset.path);
        return `<a href="${link}" title="${attrTitle}">${title}</a>`;
    };
};
//# sourceMappingURL=asset_link.js.map