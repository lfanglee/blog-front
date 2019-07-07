<template>
    <div class="c-page-tag">
        <div class="title">
            <p><c-icon type="tags-fill" />&nbsp;&nbsp;{{ tagName }}</p>
            <span class="line"></span>
        </div>
        <article-list
            :list="articleList"
            :pagination="pagination"
            :showLoading="false" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import { ArticleListItem } from '@/store/modules/article/interface';
import { GetArticleListParams } from '@/services/interface';
import ArticleList from '@/components/article-list/index.vue';

type GetAritcleListFn = (data: GetArticleListParams) => Promise<Ajax.AjaxResponse<{
    list: ArticleListItem[],
    pagination: Pagination
}>>;

const articleModule = namespace('article');

@Component({
    components: {
        ArticleList
    }
})
export default class Tag extends Vue {
    @articleModule.State('articleList')
    articleList: Array<ArticleListItem>;
    @articleModule.State('pagination')
    pagination: Pagination

    @articleModule.Action('getArticleList')
    getArticleList: GetAritcleListFn;

    tagId: string;
    tagName: string;

    async created(): Promise<any> {
        this.tagId = this.$route.params.id;
        this.tagName = <string>this.$route.query.tagName;
        await this.getArticleList({
            tag: this.tagId,
            pageNo: 1,
            pageSize: 20
        });
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-page-tag {
    .title {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: $sm-pad 0;
        p {
            z-index: 99;
            background: $white;
            padding-right: $lg-pad;
        }
        .line {
            top: 50%;
        }
    }
}
</style>
