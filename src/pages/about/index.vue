<template>
    <div v-if="inited" class="c-page-about">
        <div class="title">
            <p>关于我</p>
            <span class="line"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
    inited: boolean = false;

    mounted(): void {
        this.inited = true;
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.c-page-about {
    .title {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: $sm-pad 0;
        line-height: 1.5rem;
        color: $black;
        p {
            padding-right: $lg-pad;
            background: $white;
            z-index: 99;
        }
        .line {
            top: 50%;
        }
    }
}
</style>
