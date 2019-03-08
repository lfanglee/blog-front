import * as marked from 'marked';
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

const renderer = new marked.Renderer();

marked.setOptions({
    renderer,
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight(code: string, lang: string) {
        if (!languages.includes(lang)) {
            return hljs.highlightAuto(code).value;
        }
        return hljs.highlight(lang, code).value;
    }
});

renderer.link = (href: string, title: string, text: string) => {
    return `<a href="${href}"
                target="${href.substr(0, 1) === '#' ? '_self' : '_blank'}"
                class="${href.substr(0, 1) === '#' ? '' : 'c-link'}">
                ${href.substr(0, 1) === '#' ? text : text.length > 40 ? text.slice(0, 40) + '...' : text}
            </a>`;
};

export default (content: string) => {
    if (typeof content !== 'string') {
        return { html: '' };
    }
    return {
        html: marked(content, { renderer })
    };
};