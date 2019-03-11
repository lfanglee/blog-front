<template>
    <div class="c-article-list">
        <div class="article-list">
            <div
                class="article-list-item"
                v-for="(item, index) in list"
                :key="index">
                <p class="title"><router-link :to="`/article/${item._id}`">{{ item.title }}</router-link></p>
                <p class="description">{{ item.descript }}</p>
                <div class="meta">
                    <span class="time">{{ item.createAt | dateFormat('yyyy.MM.dd')}}</span>
                </div>
            </div>
        </div>
        <div v-if="showArticleEmpty" class="article-empty">没有文章了</div>
        <div v-if="showPagegation" class="pagegation">
            <div v-if="showPrePage" class="pre-page">
                <router-link :to="`/${this.prePage}`">上一页</router-link>
            </div>
            <div v-if="showNextPage" class="next-page">
                <router-link :to="`/${this.nextPage}`">下一页</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ArticleListItem, Pagegation } from '@/store/modules/article/interface';

@Component
export default class ArticleList extends Vue {
    @Prop({
        type: Array,
        default: () => []
    })
    list: Array<ArticleListItem>;
    @Prop({
        type: Object,
        default: () => {}
    })
    pagegation: Pagegation;

    curPage: number = 1;

    get showArticleEmpty(): boolean {
        return !this.list || this.list.length === 0;
    }
    get showPagegation(): boolean {
        return this.pagegation && this.pagegation.totalPage > 1;
    }
    get showPrePage(): boolean {
        return this.pagegation.pageNo > 1;
    }
    get showNextPage(): boolean {
        return this.pagegation.pageNo < this.pagegation.totalPage;
    }
    get prePage(): number {
        return this.pagegation.pageNo > 1 ? this.pagegation.pageNo - 1 : 1;
    }
    get nextPage(): number {
        const { pageNo = 1, totalPage = 1 } = this.pagegation;
        return pageNo < totalPage ? pageNo + 1 : totalPage;
    }

    created(): void {
        this.curPage = +this.$route.params.pageNo || 1;
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-article-list {
    width: $container-width;
    margin: 0 auto;
    .article-list-item {
        position: relative;
        padding: $lg-pad 0 $normal-pad;
        margin-bottom: $xlg-pad;
        color: $black;
        .title {
            @include text-overflow;
            margin-bottom: $sm-pad;
            font-size: 1.6rem;
            font-weight: 700;
        }
        .description {
            @include content-overflow(3);
            margin: $lg-pad 0;
            color: $text;
            line-height: 1.8rem;
            min-height: 4rem;
        }
        .meta {
            font-size: $font-size-small;
            color: $secondary;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            margin-top: $sm-pad;
            line-height: 1rem;
        }
        &::after {
            content: '';
            position: absolute;
            left: -2rem;
            bottom: -2rem;
            width: 6rem;
            height: 1px;
            background-color: $border-color;
        }
    }
    .article-empty {
        text-align: center;
        color: $black;
        margin-top: $md-pad;
        padding: $md-pad 0;
    }
    .pagegation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pre-page,
        .next-page {
            padding: $md-pad 0;
            color: $black;
        }
    }
}
</style>
