<template>
    <div class="c-page-article">
        <div class="article-wrapper">
            <h3 class="article-title">{{ article.title }}</h3>
            <div class="meta"></div>
            <div class="article-content" v-html="article"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import marked from '@/utils/marked';
import { getArticle } from '@/utils/service';

@Component
export default class Article extends Vue {
    article: string = '';
    async created(): Promise<any> {
        const articleInfo = await getArticle({ id: 'articleDemo' });
        this.article = marked(articleInfo.result.content).html;
    }
}
</script>

<style lang="scss">
@import '~@/styles/tools';

.c-page-article {
    width: $container-width;
    margin: 0 auto;
    .article-content {
        margin: $lg-pad 0;
        color: $black;
        word-wrap: break-word;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: $lg-pad 0;
            padding-left: 0;
            line-height: 1.8rem;
            font-weight: 700;
            text-indent: 0;
        }
        p {
            margin-bottom: $normal-pad;
            line-height: 1.8rem;
        }
        img {
            @include border-radius;
            max-width: 100%;
        }
        pre {
            @include border-radius(3px);
            margin-bottom: $normal-pad;
            font-size: 85%;
            line-height: 1.45;
            background-color: $code-bg;
            overflow: auto;
            & > code {
                margin: 0;
                padding: $normal-pad;
                display: block;
                width: 100%;
                height: 100%;
                font-family: Roboto Mono,Monaco,courier,monospace;
                line-height: 1.6rem;
            }
        }
        ul,
        ol {
            padding-left: $mlg-pad;
            margin-bottom: $normal-pad;
            & > li {
                line-height: 1.8rem;
                padding: $sm-pad;
                list-style-type: disc;
                & > ul {
                    li {
                        list-style-type: circle;
                        &:last-of-type {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
        blockquote {
            padding: 0 $normal-pad;
            margin-bottom: $normal-pad;
            color: #6a737d;
            border-left: 0.25rem solid #dfe2e5;
            p {
                text-indent: 0rem;
                &:first-child {
                    margin-top: 0;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        hr {
            height: 0.1rem;
            background: $text;
            border: 0;
        }
        a {
            margin: 0 .1rem;
            &:hover {
                text-decoration: underline;
            }
            &.c-link {
                color: $blue;
            }
        }
    }
}
</style>
