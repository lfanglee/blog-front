<template>
    <div class="c-page-article">
        <div class="article-wrapper">
            <h3 class="article-title">{{ articleDetail.title }}</h3>
            <div class="meta">
                <span class="time">{{ articleDetail.create_at | dateFormat('yyyy.MM.dd hh:mm') }}</span>
                <span class="num">字数 {{ articleDetail.content && articleDetail.content.length }}</span>
            </div>
            <div class="article-content" v-html="articleContent"></div>
        </div>
        <div class="info-panel">
            <div class="info">
                <div class="info-left">
                    <span class="tags">
                        <m-icon type="tags-fill" />
                        <router-link
                            v-for="(list, index) in articleDetail.tags"
                            :key="index"
                            :to="`/tag/${list._id}`">
                            {{ list.name }}
                        </router-link>
                    </span>
                </div>
                <div class="info-right">
                    版权信息：非商用-署名-自由转载
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, State, namespace } from 'vuex-class';
import { ArticleDetail } from '@/store/modules/article';
import marked from '@/utils/marked';

const articleModule = namespace('article');

@Component
export default class Article extends Vue {
    @articleModule.State('detail')
    articleDetail: ArticleDetail;
    @articleModule.Action('getArticle')
    getArticle: Function;

    get articleContent(): string {
        return marked(this.articleDetail.content).html;
    }

    async created(): Promise<any> {
        this.getArticle({
            id: 'articleDemo'
        });
    }
}
</script>

<style lang="scss">
@import '~@/styles/tools';

.c-page-article {
    width: $container-width;
    margin: 0 auto;
    .article-title {
        font-size: 2rem;
        color: $black;
    }
    .meta {
        margin-top: .3rem;
        font-size: .8rem;
        color: $descript;
        span {
            margin-right: .5rem;
        }
    }
    .info-panel {
        margin: $xlg-pad 0;
        padding: $lg-pad 0;
        .info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $disabled;
        }
    }
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
