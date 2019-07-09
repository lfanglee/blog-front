import * as mdi from 'markdown-it';
import * as mdItMathjax from 'markdown-it-mathjax';

const md = mdi().use(mdItMathjax());

export default md;
