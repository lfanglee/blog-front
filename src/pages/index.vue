<template>
    <div class="c-page-index" style="height: 2000px;">
        <article-list />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import ArticleList from '@/components/article-list/index.vue';

@Component({
    components: {
        ArticleList
    }
})
export default class Home extends Vue {
    
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-page-index {
    width: $container-width;
    margin: 0 auto;
}
</style>
