"use strict";
const hexo_util_1 = require("hexo-util");
const _1 = require("./");
module.exports = (ctx) => {
    return function postLinkTag(args) {
        let slug = args.shift();
        if (!slug) {
            throw new Error(`Post not found: "${slug}" doesn't exist for {% post_link %}`);
        }
        let hash = '';
        const parts = slug.split('#');
        if (parts.length === 2) {
            slug = parts[0];
            hash = parts[1];
        }
        let escape = args[args.length - 1];
        if (escape === 'true' || escape === 'false') {
            args.pop();
        }
        else {
            escape = 'true';
        }
        const factory = (0, _1.postFindOneFactory)(ctx);
        const post = factory({ slug }) || factory({ title: slug });
        if (!post) {
            throw new Error(`Post not found: post_link ${slug}.`);
        }
        let title = args.length ? args.join(' ') : post.title || post.slug;
        // Let attribute be the true post title so it appears in tooltip.
        const attrTitle = (0, hexo_util_1.escapeHTML)(post.title || post.slug);
        if (escape === 'true')
            title = (0, hexo_util_1.escapeHTML)(title);
        const link = hexo_util_1.url_for.call(ctx, post.path + (hash ? `#${hash}` : ''));
        return `<a href="${link}" title="${attrTitle}">${title}</a>`;
    };
};
//# sourceMappingURL=post_link.js.map