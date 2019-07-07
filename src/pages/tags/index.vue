<template>
    <div v-if="inited" class="c-page-tags container">
        <div class="tags">
            <div class="title">
                <p>标签</p>
                <span class="line"></span>
            </div>
            <ul class="tags-list clearfix">
                <li
                    v-for="(item, index) in tags"
                    :key="index"
                    class="tag-item">
                    <router-link :to="`/tag/${item.id}?tagName=${item.name}`">
                        {{ item.name }}
                        <span>({{ item.count }})</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="article-map">
            <div class="title">
                <p>文章</p>
                <span class="line"></span>
            </div>
            <div class="article-list">
                <div v-for="(year, index) in allArticles" :key="index" class="year-list">
                    <p class="year-name">{{ year.year }}</p>
                    <ul v-for="(month, index) in year.monthList" :key="index" class="month-list">
                        <p class="month-name">{{ month.month | monthFormat }}</p>
                        <li v-for="(item, index) in month.articleList" :key="index" class="article-map-list-item">
                            <time>{{ item.create_at | dateFormat('MM.dd') }}</time>
                            <router-link :to="`/article/${item._id}`">{{ item.title }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, State, namespace } from 'vuex-class';
import { ArticleMapListYearListItem } from '@/store/modules/article/interface';
import { Tag } from '@/store/modules/tag/interface';
import { GetAllArticlesParams, GetAllTagsParams } from '@/services/interface';

type GetAllArticlesFn = (params: GetAllArticlesParams) => void;

type GetAllTagsFn = (params: GetAllTagsParams) => Promise<Ajax.AjaxResponse<{
    list: Tag[],
    pagination: Pagination
}>>;

const articleModule = namespace('article');
const tagModule = namespace('tag');

@Component
export default class Tags extends Vue {
    @articleModule.State('allArticles')
    allArticles: Array<ArticleMapListYearListItem>;
    @tagModule.State('tags')
    tags: Array<Tag>;

    @articleModule.Action('getAllArticles')
    getAllArticles: GetAllArticlesFn;
    @tagModule.Action('getAllTags')
    getAllTags: GetAllTagsFn;

    inited: boolean = false;

    async created(): Promise<any> {
        await this.getAllTags({})
        await this.getAllArticles({});
        this.inited = true;
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-page-tags {
    .title {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: $sm-pad 0;
        line-height: 1.5rem;
        color: $black;
        p {
            padding-right: $lg-pad;
            background: $white;
            z-index: 99;
        }
        .line {
            top: 50%;
        }
    }
    .tags {
        .tags-list {
            padding: $normal-pad $lg-pad;
            .tag-item {
                float: left;
                margin: .3rem;
                a {
                    display: block;
                    padding: .4rem;
                    color: $secondary;
                    &:hover {
                        color: $black;
                    }
                }
            }
        }
    }
    .article-list {
        padding: $normal-pad $mlg-pad;
        .year-name {
            font-size: 1.5rem;
        }
        .month-list {
            padding: $normal-pad $mlg-pad;
            .article-map-list-item {
                position: relative;
                display: flex;
                align-items: center;
                height: 20px;
                line-height: 20px;
                margin: $sm-pad $mlg-pad;
                box-sizing: border-box;
                time {
                    margin-left: $normal-pad;
                    color: $dividers;
                    font-size: $font-size-small;
                }
                a {
                    @include text-overflow;
                    margin-left: $md-pad;
                    text-decoration: underline;
                    color: $secondary;
                    &:hover {
                        columns: black;
                    }
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 6px;
                    width: 6px;
                    height: 6px;
                    margin-left: -4px;
                    background: $dividers;
                    @include border-radius(50%);
                }
            }
        }
    }
}
</style>
