<template>
    <div class="c-article-list">
        <div class="article-list">
            <div
                class="article-list-item"
                v-for="(item, index) in list"
                :key="index">
                <p class="title"><router-link to="`/article/${item._id}`">{{ item.title }}</router-link></p>
                <p class="description">{{ item.descript }}</p>
                <div class="meta">
                    <span class="time">{{ item.createAt | dateFormat('yyyy.MM.dd')}}</span>
                </div>
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
    pagegation: Pagegation
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-article-list {
    width: $container-width;
    margin: 0 auto;
    .article-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $lg-pad 0 $normal-pad;
        margin-bottom: $xlg-pad;
        color: $black;
    }
}
</style>
