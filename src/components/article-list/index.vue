<template>
    <div class="c-article-list">
        <div v-show="!showLoading" class="article-list">
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
        <div v-if="showArticleEmpty && !showLoading" class="article-empty">没有文章了</div>
        <div v-if="showPagegation && !showLoading" class="pagegation">
            <div v-if="showPrePage" class="pre-page">
                <div @click="handlePrePage">上一页</div>
            </div>
            <div v-if="showNextPage" class="next-page">
                <div @click="handleNextPage">下一页</div>
            </div>
        </div>
        <div class="loading-artilce">
            <page-loading ref="pageLoading"></page-loading>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator';
import PageLoading from '@/components/loading/pageLoading.vue';
import { ArticleListItem, Pagegation } from '@/store/modules/article/interface';

@Component({
    components: {
        PageLoading
    }
})
export default class ArticleList extends Vue {
    $refs: {
        pageLoading: PageLoading
    }
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
    @Prop({
        type: Boolean,
        default: false
    })
    showLoading: boolean;

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

    @Watch('showLoading')
    onShowLoadingChange(newVal: boolean) {
        newVal ? this.$refs.pageLoading.show() : this.$refs.pageLoading.hide();
    }

    created(): void {
        this.curPage = +this.$route.params.pageNo || 1;
    }

    @Emit('onClickPrePage')
    handlePrePage(): number {
        return this.prePage;
    }

    @Emit('onClickNextPage')
    handleNextPage(): number {
        return this.nextPage;
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
            & > div {
                cursor: pointer;
            }
        }
    }
    .loading-artilce {
        padding: $md-pad 0;
    }
}
</style>
