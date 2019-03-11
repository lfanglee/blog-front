<template>
    <div class="c-page-loading" v-if="loading">
        <loading />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Loading from './index.vue';

@Component({
    components: {
        Loading
    }
})
export default class PageLoading extends Vue {
    loading: boolean = false;
    show(): void {
        this.loading = true;
    }
    hide(): void {
        this.loading = false;
    }
}
</script>

<style lang="scss" scoped>

</style>
