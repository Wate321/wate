"use strict";
const hexo_util_1 = require("hexo-util");
const _1 = require("./");
module.exports = (ctx) => {
    return function postPathTag(args) {
        const slug = args.shift();
        if (!slug)
            return;
        const factory = (0, _1.postFindOneFactory)(ctx);
        const post = factory({ slug }) || factory({ title: slug });
        if (!post)
            return;
        const link = hexo_util_1.url_for.call(ctx, post.path);
        return link;
    };
};
//# sourceMappingURL=post_path.js.map