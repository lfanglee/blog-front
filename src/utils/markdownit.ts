import * as mdi from 'markdown-it';
import * as mdItMathjax from 'markdown-it-mathjax';
import hljs from './highlight';

const languages = [
    'javascript',
    'xml',
    'css',
    'scss',
    'less',
    'bash',
    'json',
    'java',
    'python',
    'php',
    'typescript',
    'markdown',
    'sql',
    'cpp'
];

const md = mdi({
    html: true,
    linkify: true,
    typographer: true,
    highlight(code: string, lang: string) {
        if (!languages.includes(lang)) {
            return hljs.highlightAuto(code).value;
        }
        return hljs.highlight(lang, code).value;
    }
}).use(mdItMathjax());

md.renderer.rules.link_open = (tokens, idx, options, _env, renderer) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');
    if (!!~hrefIndex) {
        const link = token.attrs[hrefIndex];
        const href = link[1];
        const isExternal = /^https?:/.test(href);
        const isSourceLink = /(\/|\.md|\.html)(#.*)?$/.test(href);
        if (isExternal) {
            token.attrSet('target', '_blank');
            token.attrJoin('class', 'c-link');
            if (tokens[idx + 1] && tokens[idx + 1].type === 'text') {
                const content = tokens[idx + 1].content;
                tokens[idx + 1].content = content.length > 40
                    ?  content.slice(0, 40) + '...'
                    : content;
            }
        } else if (isSourceLink) {
            token.attrSet('target', '_self');
        }
    }
    return renderer.renderToken(tokens, idx, options);
};

export default md;
