<template>
    <div class="c-page-index container">
        <article-list
            :showLoading="isLoading"
            :list="articleList"
            :pagination="pagination"
            @onClickPrePage="handlePrePage"
            @onClickNextPage="handleNextPage" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ArticleList from '@/components/article-list/index.vue';
import { ArticleListItem, pagination } from '@/store/modules/article/interface';
import { GetArticleListParams } from '@/services/interface';
import { State, Action, namespace } from 'vuex-class';

type GetArticleListFn = (params: GetArticleListParams) => void;

const articleModule = namespace('article');

@Component({
    components: {
        ArticleList
    }
})
export default class Home extends Vue {
    @articleModule.State('articleList')
    articleList: Array<ArticleListItem>;
    @articleModule.State('pagination')
    pagination: pagination;

    @articleModule.Action('getArticleList')
    getArticleList: GetArticleListFn;

    curPageNo: number = 1;
    isLoading: boolean = false;

    async created(): Promise<any> {
        await this.loadArticleList(+this.$route.params.pageNo || 1);
    }

    async beforeRouteUpdate (to, from, next) {
        const { params } = to;
        if (params && +params.pageNo !== this.curPageNo) {
            await this.loadArticleList(+params.pageNo);
        }
        next();
    }

    async loadArticleList(pageNo: number = 1) {
        this.curPageNo = +pageNo || 1;
        this.isLoading = true;
        await this.getArticleList({   
            pageNo: pageNo,
            pageSize: 6
        });
        this.isLoading = false;    
    }
    
    handlePrePage(page: number) {
        this.$router.push({
            path: `/${page}`
        });
    }
    handleNextPage(page: number) {
        this.$router.push({
            path: `/${page}`
        });
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

</style>
