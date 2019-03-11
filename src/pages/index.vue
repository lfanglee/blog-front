<template>
    <div class="c-page-index container">
        <article-list
            :showLoading="isLoading"
            :list="articleList"
            :pagegation="pagegation" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ArticleList from '@/components/article-list/index.vue';
import { ArticleListItem, Pagegation } from '@/store/modules/article/interface';
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
    @articleModule.State('pagegation')
    pagegation: Pagegation;

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
            tag: 'xxx',       
            pageNo: pageNo,
            pageSize: 6
        });
        this.isLoading = false;    
    }
    
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

</style>
