"use strict";
const path_1 = require("path");
const hexo_util_1 = require("hexo-util");
const rCaptionTitleFile = /(.*)?(?:\s+|^)(\/*\S+)/;
const rLang = /\s*lang:(\w+)/i;
const rFrom = /\s*from:(\d+)/i;
const rTo = /\s*to:(\d+)/i;
module.exports = (ctx) => function includeCodeTag(args) {
    let codeDir = ctx.config.code_dir;
    let arg = args.join(' ');
    // Add trailing slash to codeDir
    if (!codeDir.endsWith('/'))
        codeDir += '/';
    let lang = '';
    arg = arg.replace(rLang, (match, _lang) => {
        lang = _lang;
        return '';
    });
    let from = 0;
    arg = arg.replace(rFrom, (match, _from) => {
        from = _from - 1;
        return '';
    });
    let to = Number.MAX_VALUE;
    arg = arg.replace(rTo, (match, _to) => {
        to = _to;
        return '';
    });
    const match = arg.match(rCaptionTitleFile);
    // Exit if path is not defined
    if (!match)
        return;
    const path = match[2];
    // If the language is not defined, use file extension instead
    lang = lang || (0, path_1.extname)(path).substring(1);
    const source = (0, path_1.join)(codeDir, path).replace(/\\/g, '/');
    // Prevent path traversal: https://github.com/hexojs/hexo/issues/5250
    const Page = ctx.model('Page');
    const doc = Page.findOne({ source });
    if (!doc)
        return;
    let code = doc.content;
    const lines = code.split('\n');
    code = lines.slice(from, to).join('\n').trim();
    // If the title is not defined, use file name instead
    const title = match[1] || (0, path_1.basename)(path);
    const caption = `<span>${title}</span><a href="${hexo_util_1.url_for.call(ctx, doc.path)}">view raw</a>`;
    if (ctx.extend.highlight.query(ctx.config.syntax_highlighter)) {
        const options = {
            lang,
            caption,
            lines_length: lines.length
        };
        return ctx.extend.highlight.exec(ctx.config.syntax_highlighter, {
            context: ctx,
            args: [code, options]
        });
    }
    return `<pre><code>${code}</code></pre>`;
};
//# sourceMappingURL=include_code.js.map