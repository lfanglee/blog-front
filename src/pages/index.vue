<template>
    <div class="c-page-index container">
        <article-list
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

    async created(): Promise<any> {
        this.getArticleList({
            tag: 'xxx',
            pageNo: 1,
            pageSize: 6
        });
    }
    
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

</style>
