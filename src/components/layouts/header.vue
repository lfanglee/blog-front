<template>
    <header>
        <div class="header">
            <div class="header-left">
                <nav>
                    <router-link to="/home">首页</router-link>
                    <router-link to="/tags">标签</router-link>
                    <router-link to="/">aaa</router-link>
                </nav>
            </div>
            <div class="header-right"></div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyHeader extends Vue {
    mounted(): void {
        
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/index';

header {
    @include css3-prefix('transform', translateY(0));
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 4rem;
}
</style>
