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
        <div class="pagegation">
            <div class="pre-page"></div>
            <div class="next-page"></div>
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

    created(): void {
        this.curPage = +this.$route.params.id || 1;
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
}
</style>
